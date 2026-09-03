import type { Metadata } from 'next';
import SignInClient from './SignInClient';

export const metadata: Metadata = {
  title: 'Đăng nhập',
  description:
    'Đăng nhập vào tài khoản Halo Chat của bạn để tiếp tục trò chuyện cùng bạn bè và đồng nghiệp.',
};

export default function SignInPage() {
  return <SignInClient />;
}
