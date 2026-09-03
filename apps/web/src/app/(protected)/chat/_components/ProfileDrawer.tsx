'use client';

import { useEffect, useState } from 'react';
import { Avatar, Button, Drawer, Form, Input, Switch, Tabs, Typography, Upload } from 'antd';
import { UserOutlined, LockOutlined, InboxOutlined } from '@ant-design/icons';

import type { AxiosError } from 'axios';

import { notify } from '@/lib/notify';
import { useUpdateProfile, useChangePassword } from '@/hook/useUser';
import { attachmentService } from '@/services/attachment.service';
import { colorForId, initialOf } from '@/lib/avatar';
import { useIsMobile } from '@/hook/useMediaQuery';
import {
  isPushSupported,
  getCurrentPushSubscription,
  subscribeToPush,
  unsubscribeFromPush,
} from '@/lib/push';
import type { User, UpdateProfilePayload, ChangePasswordPayload } from '@/types/user';
import type { ApiResponse } from '@/types/api';

const { Text } = Typography;

const { TextArea } = Input;

interface ProfileDrawerProps {
  open: boolean;
  onClose: () => void;
  currentUser?: User;
}

const ProfileDrawer = ({ open, onClose, currentUser }: ProfileDrawerProps) => {
  const isMobile = useIsMobile();
  const [profileForm] = Form.useForm<UpdateProfilePayload>();
  const [passwordForm] = Form.useForm<ChangePasswordPayload & { confirmPassword: string }>();

  const updateProfileMutation = useUpdateProfile();
  const changePasswordMutation = useChangePassword();

  const [selectedAvatarFile, setSelectedAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pushEnabled, setPushEnabled] = useState(false);
  const [pushLoading, setPushLoading] = useState(false);

  const watchedAvatar = Form.useWatch('avatar', profileForm);

  useEffect(() => {
    if (currentUser && open) {
      profileForm.setFieldsValue({
        username: currentUser.username,
        avatar: currentUser.avatar || '',
        bio: currentUser.bio || '',
      });
    }
  }, [currentUser, open, profileForm]);

  const handleClose = () => {
    setSelectedAvatarFile(null);
    setAvatarPreview(null);
    onClose();
  };

  useEffect(() => {
    if (!open) return;
    getCurrentPushSubscription().then((subscription) => setPushEnabled(!!subscription));
  }, [open]);

  const handleTogglePush = async (checked: boolean) => {
    setPushLoading(true);
    try {
      if (checked) {
        await subscribeToPush();
        notify.success('Đã bật thông báo đẩy!');
      } else {
        await unsubscribeFromPush();
        notify.success('Đã tắt thông báo đẩy!');
      }
      setPushEnabled(checked);
    } catch (err) {
      notify.error(err instanceof Error ? err.message : 'Không thể thay đổi thông báo đẩy!');
    } finally {
      setPushLoading(false);
    }
  };

  const handleUpdateProfile = async (values: UpdateProfilePayload) => {
    setIsSubmitting(true);
    try {
      let finalAvatarUrl = values.avatar;

      if (selectedAvatarFile) {
        const uploadRes = await attachmentService.uploadFiles([selectedAvatarFile]);
        const uploadedUrl = uploadRes.data.attachments[0]?.url;
        if (uploadedUrl) {
          finalAvatarUrl = uploadedUrl;
        } else {
          throw new Error('Không thể tải ảnh lên');
        }
      }

      updateProfileMutation.mutate(
        { ...values, avatar: finalAvatarUrl },
        {
          onSuccess: () => {
            notify.success('Cập nhật hồ sơ thành công!');
            setSelectedAvatarFile(null);
          },
          onError: (err) => {
            const axiosErr = err as AxiosError<ApiResponse<null>>;
            notify.error(axiosErr.response?.data?.message || 'Cập nhật hồ sơ thất bại!');
          },
        },
      );
    } catch (err) {
      notify.error(err instanceof Error ? err.message : 'Tải ảnh đại diện thất bại!');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChangePassword = (values: ChangePasswordPayload & { confirmPassword: string }) => {
    changePasswordMutation.mutate(
      { oldPassword: values.oldPassword, newPassword: values.newPassword },
      {
        onSuccess: () => {
          notify.success('Đổi mật khẩu thành công!');
          passwordForm.resetFields();
        },
        onError: (err) => {
          const axiosErr = err as AxiosError<ApiResponse<null>>;
          notify.error(axiosErr.response?.data?.message || 'Đổi mật khẩu thất bại!');
        },
      },
    );
  };

  const topHeaderAvatar = currentUser?.avatar || watchedAvatar || undefined;
  const draggerPreview = avatarPreview || watchedAvatar || currentUser?.avatar;

  return (
    <Drawer title="Hồ sơ cá nhân" open={open} onClose={handleClose} size={isMobile ? '100%' : 420}>
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <Avatar
          size={80}
          src={topHeaderAvatar}
          style={{ backgroundColor: currentUser ? colorForId(currentUser._id) : '#5b5bf6' }}
        >
          {currentUser ? initialOf(currentUser.username) : undefined}
        </Avatar>
      </div>

      <Tabs
        items={[
          {
            key: 'info',
            label: 'Thông tin',
            children: (
              <Form
                form={profileForm}
                layout="vertical"
                onFinish={handleUpdateProfile}
                requiredMark={false}
              >
                <Form.Item
                  name="username"
                  label="Tên hiển thị"
                  rules={[{ required: true, message: 'Vui lòng nhập tên hiển thị!' }]}
                >
                  <Input prefix={<UserOutlined />} placeholder="Tên hiển thị" />
                </Form.Item>
                <Form.Item name="avatar" label="Ảnh đại diện">
                  <Form.Item name="avatar" noStyle>
                    <Input type="hidden" />
                  </Form.Item>
                  <Upload.Dragger
                    name="file"
                    accept="image/*"
                    showUploadList={false}
                    beforeUpload={(file) => {
                      setSelectedAvatarFile(file);
                      const localUrl = URL.createObjectURL(file);
                      setAvatarPreview(localUrl);
                      return false; // Prevent auto upload
                    }}
                    style={{ padding: '16px', background: '#f8fafc', borderRadius: '12px' }}
                  >
                    {draggerPreview ? (
                      <div className="flex flex-col gap-2 justify-center items-center">
                        <Avatar size={64} src={draggerPreview} />
                        <p
                          className="ant-upload-text"
                          style={{ fontSize: 13, fontWeight: 500, margin: 0 }}
                        >
                          {selectedAvatarFile
                            ? 'Đã chọn ảnh mới'
                            : 'Nhấp hoặc kéo thả ảnh khác để đổi'}
                        </p>
                        <p
                          className="ant-upload-hint"
                          style={{ fontSize: 11, color: '#888', margin: 0 }}
                        >
                          Bấm &quot;Lưu thay đổi&quot; phía dưới để áp dụng ảnh mới
                        </p>
                      </div>
                    ) : (
                      <>
                        <p className="ant-upload-drag-icon" style={{ marginBottom: 8 }}>
                          <InboxOutlined style={{ color: '#6f6bff', fontSize: 32 }} />
                        </p>
                        <p className="ant-upload-text" style={{ fontSize: 14, fontWeight: 500 }}>
                          Kéo thả ảnh vào đây hoặc nhấp để chọn ảnh
                        </p>
                        <p className="ant-upload-hint" style={{ fontSize: 12, color: '#888' }}>
                          Ảnh mới sẽ được lưu khi bạn bấm &quot;Lưu thay đổi&quot;
                        </p>
                      </>
                    )}
                  </Upload.Dragger>
                </Form.Item>
                <Form.Item name="bio" label="Giới thiệu bản thân">
                  <TextArea rows={3} maxLength={200} showCount placeholder="Vài dòng về bạn..." />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    loading={updateProfileMutation.isPending || isSubmitting}
                  >
                    Lưu thay đổi
                  </Button>
                </Form.Item>
              </Form>
            ),
          },
          {
            key: 'password',
            label: 'Mật khẩu',
            children: (
              <Form
                form={passwordForm}
                layout="vertical"
                onFinish={handleChangePassword}
                requiredMark={false}
              >
                <Form.Item
                  name="oldPassword"
                  label="Mật khẩu hiện tại"
                  rules={[{ required: true, message: 'Vui lòng nhập mật khẩu hiện tại!' }]}
                >
                  <Input.Password prefix={<LockOutlined />} placeholder="••••••••" />
                </Form.Item>
                <Form.Item
                  name="newPassword"
                  label="Mật khẩu mới"
                  rules={[
                    { required: true, message: 'Vui lòng nhập mật khẩu mới!' },
                    { min: 8, message: 'Mật khẩu mới phải có ít nhất 8 ký tự!' },
                  ]}
                >
                  <Input.Password prefix={<LockOutlined />} placeholder="••••••••" />
                </Form.Item>
                <Form.Item
                  name="confirmPassword"
                  label="Xác nhận mật khẩu mới"
                  dependencies={['newPassword']}
                  rules={[
                    { required: true, message: 'Vui lòng xác nhận mật khẩu mới!' },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('newPassword') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('Mật khẩu xác nhận không khớp!'));
                      },
                    }),
                  ]}
                >
                  <Input.Password prefix={<LockOutlined />} placeholder="••••••••" />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    loading={changePasswordMutation.isPending}
                  >
                    Đổi mật khẩu
                  </Button>
                </Form.Item>
              </Form>
            ),
          },
          {
            key: 'notifications',
            label: 'Thông báo',
            children: (
              <div
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <div>
                  <div>Thông báo đẩy</div>
                  <Text type="secondary" style={{ fontSize: 12 }}>
                    Nhận thông báo tin nhắn mới khi không mở ứng dụng
                  </Text>
                </div>
                <Switch
                  checked={pushEnabled}
                  loading={pushLoading}
                  disabled={!isPushSupported()}
                  onChange={handleTogglePush}
                />
              </div>
            ),
          },
        ]}
      />
    </Drawer>
  );
};

export default ProfileDrawer;
