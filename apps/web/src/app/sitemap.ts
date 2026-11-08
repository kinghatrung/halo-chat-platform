import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/constants/brand';

// Only public pages. "/" is left out: it only redirects (to /signin or /chat), and Google
// reports redirecting URLs in a sitemap as errors.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/signin`, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${SITE_URL}/signup`, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
