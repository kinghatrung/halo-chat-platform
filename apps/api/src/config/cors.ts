// Cookies are sent with SameSite=None in production, so reflecting every origin would let any
// website read a logged-in user's data. Only CLIENT_URL (comma-separated) may call with credentials.
// Native mobile requests send no Origin header and are unaffected.
export const corsOrigin: string[] | boolean = process.env.CLIENT_URL
  ? process.env.CLIENT_URL.split(',').map((s) => s.trim().replace(/\/+$/, '')) // Origin headers never end in "/"
  : process.env.NODE_ENV !== 'production';
