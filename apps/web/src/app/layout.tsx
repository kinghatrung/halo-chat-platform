import type { Metadata } from 'next';
import { Be_Vietnam_Pro, Geist_Mono } from 'next/font/google';
import './globals.css';
import '@livekit/components-styles';
import { Providers } from './providers';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { APP_NAME, SITE_URL as siteUrl } from '@/constants/brand';

// Be Vietnam Pro ships a real Vietnamese subset; Geist had none, so accented letters
// (ệ, ữ, ộ…) fell back to another font mid-word.
const appSans = Be_Vietnam_Pro({
  variable: '--font-app-sans',
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${APP_NAME} - Nền tảng nhắn tin & trò chuyện trực tuyến`,
    template: `%s | ${APP_NAME}`,
  },
  description: `${APP_NAME} là nền tảng nhắn tin trực tuyến thời gian thực hiện đại, cho phép bạn nhắn tin, gọi thoại, gọi video và giữ liên lạc với bạn bè, đồng nghiệp mọi lúc mọi nơi.`,
  keywords: [
    APP_NAME,
    'tro chuyen truc tuyen',
    'nhan tin mien phi',
    'chat app Nextjs',
    'tro chuyen nhom',
    'goi video trực tuyến',
  ],
  authors: [{ name: `${APP_NAME} Team` }],
  creator: APP_NAME,
  publisher: APP_NAME,
  applicationName: APP_NAME,
  alternates: {
    canonical: './',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: siteUrl,
    title: `${APP_NAME} - Nền tảng nhắn tin & trò chuyện trực tuyến`,
    description: `Kết nối và giữ liên lạc liền mạch cùng bạn bè, gia đình và đồng nghiệp với ${APP_NAME}.`,
    siteName: APP_NAME,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: `${APP_NAME} — nhắn tin, gọi thoại và gọi video miễn phí`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${APP_NAME} - Trò chuyện liền mạch, kết nối không giới hạn`,
    description:
      'Nền tảng nhắn tin hiện đại với giao diện mượt mà, hỗ trợ gửi tin nhắn, gọi thoại và gọi video.',
    images: ['/og.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: APP_NAME,
  applicationCategory: 'CommunicationApplication',
  operatingSystem: 'Web, Windows, macOS, Android, iOS',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'VND',
  },
  description: `${APP_NAME} là nền tảng nhắn tin thời gian thực hiện đại, cho phép bạn kết nối và gọi thoại/video dễ dàng.`,
  url: siteUrl,
  image: `${siteUrl}/og.png`,
  author: {
    '@type': 'Organization',
    name: APP_NAME,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`min-h-full ${appSans.variable} ${geistMono.variable} h-full antialiased`}>
        <AntdRegistry>
          <Providers>{children}</Providers>
        </AntdRegistry>
      </body>
    </html>
  );
}
