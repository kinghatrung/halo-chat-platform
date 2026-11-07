'use client';

import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import type { AxiosError } from 'axios';

import { notify } from '@/lib/notify';
import { useLogin } from '@/hook/useAuth';
import type { LoginPayload } from '@/types/auth';
import type { ApiResponse } from '@/types/api';
import AuthShell from '../_components/AuthShell';

export default function SignInClient() {
  const router = useRouter();
  const loginMutation = useLogin();

  const handleLogin = (values: LoginPayload) => {
    loginMutation.mutate(values, {
      onSuccess: () => {
        router.push('/chat');
        router.refresh();
        notify.success('Đăng nhập thành công!');
      },
      onError: (err) => {
        const axiosErr = err as AxiosError<ApiResponse<null>>;
        notify.error(axiosErr.response?.data?.message || 'Đăng nhập thất bại. Vui lòng thử lại!');
      },
    });
  };

  return (
    <AuthShell
      title="Chào mừng trở lại"
      subtitle="Đăng nhập để tiếp tục cuộc trò chuyện của bạn"
      footer={
        <>
          Chưa có tài khoản? <Link href="/signup">Đăng ký ngay</Link>
        </>
      }
    >
      <Form name="signin" onFinish={handleLogin} layout="vertical" autoComplete="off">
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Vui lòng nhập email!' },
            { type: 'email', message: 'Email không hợp lệ!' },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="ban@example.com" autoFocus />
        </Form.Item>

        <Form.Item
          name="password"
          label="Mật khẩu"
          rules={[
            { required: true, message: 'Vui lòng nhập mật khẩu!' },
            { min: 8, message: 'Mật khẩu phải có ít nhất 8 ký tự!' },
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="••••••••" />
        </Form.Item>

        <Form.Item style={{ marginBottom: 0 }}>
          <Button
            type="primary"
            htmlType="submit"
            loading={loginMutation.isPending}
            block

            style={{ height: 44, fontWeight: 600 }}
          >
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </AuthShell>
  );
}
