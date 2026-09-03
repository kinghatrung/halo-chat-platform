'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { ConfigProvider, App as AntdApp } from 'antd';
import viVN from 'antd/locale/vi_VN';

import Notification from '@/components/Notification';
import { lightTheme, darkTheme } from '@/lib/theme';
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

  const themeConfig = isDarkMode ? darkTheme : lightTheme;

  return (
    <ConfigProvider locale={viVN} theme={themeConfig}>
      <AntdApp>
        <QueryClientProvider client={queryClient}>
          <Notification />
          {children}
        </QueryClientProvider>
      </AntdApp>
    </ConfigProvider>
  );
}
