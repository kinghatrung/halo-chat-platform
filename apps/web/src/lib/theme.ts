import { theme, type ThemeConfig } from 'antd';

// Brand palette — matches the Nimbo logo gradient (sky → indigo → violet).
export const BRAND = {
  sky: '#38BDF8',
  primary: '#6366F1',
  violet: '#8B5CF6',
  gradient: 'linear-gradient(135deg, #38BDF8 0%, #6366F1 55%, #8B5CF6 100%)',
};

const shared: ThemeConfig = {
  token: {
    colorPrimary: BRAND.primary,
    colorInfo: BRAND.primary,
    colorLink: BRAND.primary,
    borderRadius: 12,
    borderRadiusLG: 16,
    borderRadiusSM: 8,
    controlHeight: 40,
    controlHeightLG: 48,
    fontSize: 14,
    fontFamily: 'var(--font-app-sans), system-ui, -apple-system, "Segoe UI", sans-serif',
  },
  components: {
    Button: { fontWeight: 500, primaryShadow: 'none' },
    Input: { activeShadow: '0 0 0 3px rgba(99, 102, 241, 0.15)' },
    Modal: { borderRadiusLG: 20 },
    Menu: { itemBorderRadius: 10 },
    Badge: { dotSize: 8 },
  },
};

export const lightTheme: ThemeConfig = {
  ...shared,
  algorithm: theme.defaultAlgorithm,
  token: {
    ...shared.token,
    colorBgBase: '#ffffff',
    colorBgContainer: '#ffffff',
    colorBgLayout: '#f5f6fb',
    colorBorder: '#e3e5f0',
    colorBorderSecondary: '#eef0f6',
    colorText: '#1c1d2b',
    colorTextSecondary: '#6b6f85',
  },
};

export const darkTheme: ThemeConfig = {
  ...shared,
  algorithm: theme.darkAlgorithm,
  token: {
    ...shared.token,
    colorBgBase: '#14151c',
    colorBgContainer: '#1b1c25',
    colorBgElevated: '#232532',
    colorBgLayout: '#101118',
    colorBorder: '#2a2c3a',
    colorBorderSecondary: '#222431',
  },
};

export const antdTheme = lightTheme;
