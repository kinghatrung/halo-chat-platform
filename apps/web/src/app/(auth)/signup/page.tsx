import type { Metadata } from 'next';
import SignUpClient from './SignUpClient';
import { APP_NAME } from '@/constants/brand';

export const metadata: Metadata = {
  title: 'Tạo tài khoản',
  description: `Tạo tài khoản ${APP_NAME} miễn phí để bắt đầu nhắn tin và gọi điện với bạn bè ngay hôm nay.`,
};

export default function SignUpPage() {
  return <SignUpClient />;
}
