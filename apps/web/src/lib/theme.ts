import { theme, type ThemeConfig } from 'antd';

const BRAND_COLOR = '#5b5bf6';

export const lightTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: BRAND_COLOR,
    colorBgBase: '#ffffff',
    colorBgContainer: '#ffffff', // White background for Sidebar & Cards
    colorBgLayout: '#f4f5fb', // Light grayish blue background for ChatWindow
    colorBorder: '#e2e4ed', // Clear border color between sidebar & chat
    colorBorderSecondary: '#eceef5',
    borderRadius: 8,
    fontFamily: 'var(--font-geist-sans), Arial, Helvetica, sans-serif',
  },
};

export const darkTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: BRAND_COLOR,
    colorBgBase: '#18181c', // Dark base background
    colorBgContainer: '#1f1f24', // Slightly darker slate container for Sidebar & Cards
    colorBgElevated: '#282830', // Modals & Dropdowns background
    colorBgLayout: '#121215', // ChatWindow canvas background
    colorBorder: '#2e2e38', // Distinct dark border color
    colorBorderSecondary: '#262630',
    borderRadius: 8,
    fontFamily: 'var(--font-geist-sans), Arial, Helvetica, sans-serif',
  },
};

export const antdTheme = lightTheme;
