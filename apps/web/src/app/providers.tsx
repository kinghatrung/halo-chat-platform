'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { ConfigProvider, App as AntdApp, theme } from 'antd';
import viVN from 'antd/locale/vi_VN';

import Notification from '@/components/Notification';
import { antdTheme } from '@/lib/theme';
import { useThemeStore } from '@/store/useThemeStore';

export function Providers({ children }: { children: React.ReactNode }) {
  const isDarkMode = useThemeStore((s) => s.isDarkMode);

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  const mergedTheme = {
    ...antdTheme,
    algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
  };

  return (
    <ConfigProvider locale={viVN} theme={mergedTheme}>
      <AntdApp>
        <QueryClientProvider client={queryClient}>
          <Notification />
          {children}
        </QueryClientProvider>
      </AntdApp>
    </ConfigProvider>
  );
}
