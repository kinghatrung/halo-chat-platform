import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://halochat.app';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/chat/', '/admin/', '/join/', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
