import { Response } from 'express';
import type { SuccessResponse, ErrorResponse } from '@/types';

// User text used inside a Mongo $regex: unescaped "(" throws (500) and patterns like "(a+)+" hang the DB.
export const escapeRegex = (input: string) => input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Page size from the query string; capped so ?pageSize=1000000 cannot dump a whole collection.
export const toPageSize = (value: unknown, fallback = 20) =>
  Math.min(100, Math.max(1, Number(value) || fallback));

export const sendSuccess = <T>(res: Response, data: T, message = 'Success', statusCode = 200) => {
  const response: SuccessResponse<T> = {
    success: true,
    message,
    data,
    error: null,
  };

  return res.status(statusCode).json(response);
};

export const sendError = (
  res: Response,
  message = 'Internal server error',
  statusCode = 500,
  error?: {
    code?: string;
    details?: unknown;
  },
) => {
  const response: ErrorResponse = {
    success: false,
    message,
    data: null,
    error: error || {
      code: 'INTERNAL_SERVER_ERROR',
    },
  };

  return res.status(statusCode).json(response);
};
