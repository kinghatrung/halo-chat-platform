import type { Metadata } from 'next';
import SignInClient from './SignInClient';
import { APP_NAME } from '@/constants/brand';

export const metadata: Metadata = {
  title: 'Đăng nhập',
  description: `Đăng nhập vào tài khoản ${APP_NAME} của bạn để tiếp tục trò chuyện cùng bạn bè và đồng nghiệp.`,
};

export default function SignInPage() {
  return <SignInClient />;
}
