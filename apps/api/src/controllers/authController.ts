import { Request, Response, type CookieOptions } from 'express';
import ms from 'ms';

import authService from '@/services/authService';
import { sendSuccess, sendError } from '@/helpers';
import { logger } from '@/helpers/logger';

const isProduction = process.env.NODE_ENV === 'production';
const cookieOptions: CookieOptions = {
  httpOnly: true,
  secure: isProduction,
  // Lax, not None: the web app calls the API on its own origin (/api), and None let any other
  // site fire cookie-authenticated POSTs (join group, friend requests, logout-all…) = CSRF.
  sameSite: 'lax',
};

const setAccessCookie = (res: Response, token: string) =>
  res.cookie('accessToken', token, { ...cookieOptions, maxAge: ms('15m') });

const clearAuthCookies = (res: Response) => {
  res.clearCookie('accessToken', cookieOptions);
  res.clearCookie('refreshToken', cookieOptions);
};

const getRefreshToken = (req: Request): string | undefined =>
  req.cookies?.refreshToken || req.body?.refreshToken;

const errorMessage = (error: unknown) =>
  error instanceof Error ? error.message : 'Internal server error';

const authController = {
  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const result = await authService.login(email, password);

      setAccessCookie(res, result.accessToken);
      // Same lifetime as the refresh JWT and its DB row (7d), so the cookie never outlives the token.
      res.cookie('refreshToken', result.refreshToken, { ...cookieOptions, maxAge: ms('7d') });

      return sendSuccess(res, result, 'Login success', 200);
    } catch (error) {
      logger.error(`Login failed for email=${req.body?.email}`, error);
      return sendError(res, errorMessage(error), 401);
    }
  },

  register: async (req: Request, res: Response) => {
    try {
      const { username, email, password } = req.body;
      const result = await authService.register(username, email, password);

      return sendSuccess(res, result, 'Register success', 201);
    } catch (error) {
      return sendError(res, errorMessage(error), 400);
    }
  },

  logout: async (req: Request, res: Response) => {
    try {
      const refreshToken = getRefreshToken(req);
      if (refreshToken) {
        await authService.logout(refreshToken);
      }

      clearAuthCookies(res);
      return sendSuccess(res, null, 'Logout success', 200);
    } catch (error) {
      return sendError(res, errorMessage(error), 500);
    }
  },

  logoutAll: async (req: Request, res: Response) => {
    try {
      const refreshToken = getRefreshToken(req);
      if (!refreshToken) {
        return sendError(res, 'Refresh token is required!', 400);
      }

      await authService.logoutAll(refreshToken);

      clearAuthCookies(res);
      return sendSuccess(res, null, 'Logged out of all devices successfully', 200);
    } catch (error) {
      return sendError(res, errorMessage(error), 500);
    }
  },

  refresh: async (req: Request, res: Response) => {
    try {
      const refreshToken = getRefreshToken(req);
      if (!refreshToken) {
        return sendError(res, 'Refresh token is required!', 401);
      }

      const result = await authService.refreshToken(refreshToken);
      setAccessCookie(res, result.accessToken);

      return sendSuccess(res, result, 'Refresh token success', 200);
    } catch (error) {
      // A dead refresh cookie must go, or the web layout keeps treating the visitor as logged in
      // and bounces between /chat and /signin.
      clearAuthCookies(res);
      return sendError(res, errorMessage(error), 401);
    }
  },

  me: async (req: Request, res: Response) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return sendError(res, 'Unauthorized', 401);
      }

      const result = await authService.getMe(String(userId));
      return sendSuccess(res, result, 'Get profile success', 200);
    } catch (error) {
      return sendError(res, errorMessage(error), 500);
    }
  },

  changePassword: async (req: Request, res: Response) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return sendError(res, 'Unauthorized', 401);
      }

      const { oldPassword, newPassword } = req.body;
      const result = await authService.changePassword(
        String(userId),
        oldPassword,
        newPassword,
        getRefreshToken(req),
      );
      return sendSuccess(res, result, 'Change password success', 200);
    } catch (error) {
      return sendError(res, errorMessage(error), 400);
    }
  },
};

export default authController;
