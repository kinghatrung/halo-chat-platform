import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import '@livekit/components-styles';
import { Providers } from './providers';
import { AntdRegistry } from '@ant-design/nextjs-registry';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://halochat.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Halo Chat - Nền tảng nhắn tin & trò chuyện trực tuyến',
    template: '%s | Halo Chat',
  },
  description:
    'Halo Chat là nền tảng nhắn tin trực tuyến thời gian thực hiện đại, cho phép bạn nhắn tin, gọi thoại, gọi video và giữ liên lạc với bạn bè, đồng nghiệp mọi lúc mọi nơi.',
  keywords: [
    'Halo Chat',
    'HaloChat',
    'tro chuyen truc tuyen',
    'nhan tin mien phi',
    'chat app Nextjs',
    'tro chuyen nhom',
    'goi video trực tuyến',
  ],
  authors: [{ name: 'Halo Chat Team' }],
  creator: 'Halo Chat',
  publisher: 'Halo Chat',
  applicationName: 'Halo Chat',
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
    title: 'Halo Chat - Nền tảng nhắn tin & trò chuyện trực tuyến',
    description:
      'Kết nối và giữ liên lạc liền mạch cùng bạn bè, gia đình và đồng nghiệp với Halo Chat.',
    siteName: 'Halo Chat',
    images: [
      {
        url: '/image/chat-illustration.svg',
        width: 1200,
        height: 630,
        alt: 'Halo Chat Platform Illustration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Halo Chat - Trò chuyện liền mạch, kết nối không giới hạn',
    description:
      'Nền tảng nhắn tin hiện đại với giao diện mượt mà, hỗ trợ gửi tin nhắn, gọi thoại và gọi video.',
    images: ['/image/chat-illustration.svg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/faddvicon.ico',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Halo Chat',
  applicationCategory: 'CommunicationApplication',
  operatingSystem: 'Web, Windows, macOS, Android, iOS',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'VND',
  },
  description:
    'Halo Chat là nền tảng nhắn tin thời gian thực hiện đại, cho phép bạn kết nối và gọi thoại/video dễ dàng.',
  image: `${siteUrl}/image/chat-illustration.svg`,
  author: {
    '@type': 'Organization',
    name: 'Halo Chat',
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
      <body className={`min-h-full ${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
        <AntdRegistry>
          <Providers>{children}</Providers>
        </AntdRegistry>
      </body>
    </html>
  );
}
