// Single source for the backend address; set EXPO_PUBLIC_API_URL / EXPO_PUBLIC_SOCKET_URL in .env.
export const API_BASE = process.env.EXPO_PUBLIC_API_URL || 'http://192.168.1.23:5000/api';
export const SERVER_URL = API_BASE.replace(/\/api\/?$/, '');
export const SOCKET_URL = process.env.EXPO_PUBLIC_SOCKET_URL || SERVER_URL;

/**
 * Build a full URL from an attachment/avatar url. The API returns paths like
 * `/api/attachments/:id/download?token=…`; local picks (file://, content://, data:) pass through.
 */
export function buildAttachmentUrl(url: string | undefined | null): string {
  if (!url) return '';
  if (/^(https?:|file:|content:|data:)/.test(url)) return url;
  return `${SERVER_URL}${url.startsWith('/') ? url : `/${url}`}`;
}
