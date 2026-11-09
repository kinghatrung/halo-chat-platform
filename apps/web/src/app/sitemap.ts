import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/constants/brand';

// Only public pages. "/" shows the sign-in screen to logged-out visitors (see app/page.tsx).
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${SITE_URL}/signin`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/signup`, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
