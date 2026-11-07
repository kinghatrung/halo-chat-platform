'use client';

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import type { AxiosError } from 'axios';

import { notify } from '@/lib/notify';
import { useRegister } from '@/hook/useAuth';
import type { RegisterPayload } from '@/types/auth';
import type { ApiResponse } from '@/types/api';
import { APP_NAME } from '@/constants/brand';
import AuthShell from '../_components/AuthShell';

interface SignUpFormValues extends RegisterPayload {
  confirm: string;
  agreement: boolean;
}

export default function SignUpClient() {
  const router = useRouter();
  const registerMutation = useRegister();

  const handleRegister = (values: SignUpFormValues) => {
    registerMutation.mutate(
      { username: values.username, email: values.email, password: values.password },
      {
        onSuccess: () => {
          notify.success('Đăng ký tài khoản thành công! Hãy đăng nhập để bắt đầu.');
          router.push('/signin');
        },
        onError: (err) => {
          const axiosErr = err as AxiosError<ApiResponse<null>>;
          notify.error(
            axiosErr.response?.data?.message || 'Đăng ký thất bại. Vui lòng kiểm tra lại!',
          );
        },
      },
    );
  };

  return (
    <AuthShell
      title="Tạo tài khoản mới"
      subtitle={`Tham gia ${APP_NAME} chỉ trong 30 giây`}
      footer={
        <>
          Đã có tài khoản? <Link href="/signin">Đăng nhập</Link>
        </>
      }
    >
      <Form
        name="signup"
        onFinish={handleRegister}

        layout="vertical"
        autoComplete="off"
      >
        <Form.Item
          name="username"
          label="Tên hiển thị"
          rules={[
            { required: true, message: 'Vui lòng nhập tên hiển thị!' },
            { min: 3, message: 'Tên hiển thị phải có ít nhất 3 ký tự!' },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="nguyenvana" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Vui lòng nhập email!' },
            { type: 'email', message: 'Email không hợp lệ!' },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="ban@example.com" />
        </Form.Item>

        {/* Side by side on wide screens so the whole form fits one screen height. */}
        <div className="flex flex-col sm:flex-row sm:gap-3">
          <Form.Item
            className="flex-1"
            name="password"
            label="Mật khẩu"
            rules={[
              { required: true, message: 'Vui lòng nhập mật khẩu!' },
              { min: 8, message: 'Mật khẩu phải có ít nhất 8 ký tự!' },
            ]}
            hasFeedback
          >
            <Input.Password prefix={<LockOutlined />} placeholder="••••••••" />
          </Form.Item>

          <Form.Item
            className="flex-1"
            name="confirm"
            label="Nhập lại mật khẩu"
            dependencies={['password']}
            hasFeedback
            rules={[
              { required: true, message: 'Vui lòng xác nhận mật khẩu!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Mật khẩu xác nhận không khớp!'));
                },
              }),
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="••••••••" />
          </Form.Item>
        </div>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error('Bạn cần đồng ý với điều khoản sử dụng')),
            },
          ]}
        >
          <Checkbox>Tôi đồng ý với điều khoản sử dụng của {APP_NAME}</Checkbox>
        </Form.Item>

        <Form.Item style={{ marginBottom: 0 }}>
          <Button
            type="primary"
            htmlType="submit"
            loading={registerMutation.isPending}
            block

            style={{ height: 44, fontWeight: 600 }}
          >
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </AuthShell>
  );
}
