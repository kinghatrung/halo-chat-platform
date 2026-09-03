'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Button, Input, Modal, Segmented, Slider, Space, Tooltip, Upload } from 'antd';
import {
  BgColorsOutlined,
  FontSizeOutlined,
  PictureOutlined,
  PlusOutlined,
  SmileOutlined,
  CheckOutlined,
  DragOutlined,
  ZoomInOutlined,
  RotateLeftOutlined,
} from '@ant-design/icons';
import type { UploadFile, UploadProps } from 'antd';
import type { AxiosError } from 'axios';

import { useCreateStory } from '@/hook/useStories';
import { notify } from '@/lib/notify';
import {
  STORY_FONTS,
  STORY_GRADIENTS,
  STORY_STICKERS,
  type StoryFont,
  type StoryGradient,
} from '@/constants/storyPresets';
import type { ApiResponse } from '@/types/api';

const { TextArea } = Input;

interface CreateStoryModalProps {
  open: boolean;
  onClose: () => void;
}

type StoryMode = 'text' | 'photo';
type DragTarget = 'img' | 'text' | 'stickers';

const CreateStoryModal = ({ open, onClose }: CreateStoryModalProps) => {
  const [mode, setMode] = useState<StoryMode>('text');
  const [text, setText] = useState('');
  const [selectedGradient, setSelectedGradient] = useState<StoryGradient>(STORY_GRADIENTS[0]);
  const [selectedFont, setSelectedFont] = useState<StoryFont>(STORY_FONTS[0]);
  const [selectedStickers, setSelectedStickers] = useState<string[]>([]);
  const [photoFileList, setPhotoFileList] = useState<UploadFile[]>([]);
  const [isSynthesizing, setIsSynthesizing] = useState(false);

  // Scale state for Photo Zoom
  const [imgScale, setImgScale] = useState(1);

  // Position Offsets State (used for React render) & Ref-backed (used for 60fps drag loop)
  const [imgOffset, setImgOffset] = useState({ x: 0, y: 0 });
  const [textOffset, setTextOffset] = useState({ x: 0, y: 0 });
  const [stickerOffset, setStickerOffset] = useState({ x: 0, y: 0 });

  const imgOffsetRef = useRef({ x: 0, y: 0 });
  const textOffsetRef = useRef({ x: 0, y: 0 });
  const stickerOffsetRef = useRef({ x: 0, y: 0 });

  // DOM Refs for drag performance
  const imgElRef = useRef<HTMLImageElement>(null);
  const textElRef = useRef<HTMLDivElement>(null);
  const stickerElRef = useRef<HTMLDivElement>(null);

  // Drag tracking refs
  const draggingTargetRef = useRef<DragTarget | null>(null);
  const dragStartRef = useRef({ startX: 0, startY: 0, initX: 0, initY: 0 });
  const rafIdRef = useRef<number | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const createStoryMutation = useCreateStory();

  // Derive object URL preview safely without setState inside useEffect
  const photoPreviewUrl = useMemo(() => {
    const rawFile = photoFileList[0]?.originFileObj as File | undefined;
    if (!rawFile) return null;
    return URL.createObjectURL(rawFile);
  }, [photoFileList]);

  useEffect(() => {
    return () => {
      if (photoPreviewUrl) {
        URL.revokeObjectURL(photoPreviewUrl);
      }
    };
  }, [photoPreviewUrl]);

  const updateElementTransforms = useCallback(() => {
    if (imgElRef.current) {
      imgElRef.current.style.transform = `translate(${imgOffsetRef.current.x}px, ${imgOffsetRef.current.y}px) scale(${imgScale})`;
    }
    if (textElRef.current) {
      textElRef.current.style.transform = `translate(${textOffsetRef.current.x}px, ${textOffsetRef.current.y}px)`;
    }
    if (stickerElRef.current) {
      stickerElRef.current.style.transform = `translate(${stickerOffsetRef.current.x}px, ${stickerOffsetRef.current.y}px)`;
    }
  }, [imgScale]);

  useEffect(() => {
    updateElementTransforms();
  }, [updateElementTransforms, mode, text, selectedStickers]);

  const handlePhotoChange: UploadProps['onChange'] = ({ fileList: newList }) => {
    setPhotoFileList(newList.slice(-1));
    setImgScale(1);
    imgOffsetRef.current = { x: 0, y: 0 };
    setImgOffset({ x: 0, y: 0 });
    updateElementTransforms();
  };

  const handleClose = () => {
    setText('');
    setPhotoFileList([]);
    setSelectedStickers([]);
    setSelectedGradient(STORY_GRADIENTS[0]);
    setSelectedFont(STORY_FONTS[0]);
    setMode('text');
    setImgScale(1);
    imgOffsetRef.current = { x: 0, y: 0 };
    textOffsetRef.current = { x: 0, y: 0 };
    stickerOffsetRef.current = { x: 0, y: 0 };
    setImgOffset({ x: 0, y: 0 });
    setTextOffset({ x: 0, y: 0 });
    setStickerOffset({ x: 0, y: 0 });
    updateElementTransforms();
    onClose();
  };

  const resetTransforms = () => {
    setImgScale(1);
    imgOffsetRef.current = { x: 0, y: 0 };
    textOffsetRef.current = { x: 0, y: 0 };
    stickerOffsetRef.current = { x: 0, y: 0 };
    setImgOffset({ x: 0, y: 0 });
    setTextOffset({ x: 0, y: 0 });
    setStickerOffset({ x: 0, y: 0 });
    updateElementTransforms();
  };

  const toggleSticker = (sticker: string) => {
    if (selectedStickers.includes(sticker)) {
      setSelectedStickers(selectedStickers.filter((s) => s !== sticker));
    } else {
      if (selectedStickers.length >= 4) {
        notify.warning('Tối đa 4 nhãn dán cho mỗi story');
        return;
      }
      setSelectedStickers([...selectedStickers, sticker]);
    }
  };

  // 60FPS Dragging via Pointer Events
  const handlePointerDown = (e: React.PointerEvent, target: DragTarget) => {
    e.preventDefault();
    e.stopPropagation();
    draggingTargetRef.current = target;

    try {
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    } catch {
      // Ignore fallback
    }

    let initX = 0;
    let initY = 0;
    if (target === 'img') {
      initX = imgOffsetRef.current.x;
      initY = imgOffsetRef.current.y;
    } else if (target === 'text') {
      initX = textOffsetRef.current.x;
      initY = textOffsetRef.current.y;
    } else if (target === 'stickers') {
      initX = stickerOffsetRef.current.x;
      initY = stickerOffsetRef.current.y;
    }

    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initX,
      initY,
    };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!draggingTargetRef.current) return;
    const target = draggingTargetRef.current;
    const dx = e.clientX - dragStartRef.current.startX;
    const dy = e.clientY - dragStartRef.current.startY;
    const newX = dragStartRef.current.initX + dx;
    const newY = dragStartRef.current.initY + dy;

    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    rafIdRef.current = requestAnimationFrame(() => {
      if (target === 'img') {
        imgOffsetRef.current = { x: newX, y: newY };
        if (imgElRef.current) {
          imgElRef.current.style.transform = `translate(${newX}px, ${newY}px) scale(${imgScale})`;
        }
      } else if (target === 'text') {
        textOffsetRef.current = { x: newX, y: newY };
        if (textElRef.current) {
          textElRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
        }
      } else if (target === 'stickers') {
        stickerOffsetRef.current = { x: newX, y: newY };
        if (stickerElRef.current) {
          stickerElRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
        }
      }
    });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (draggingTargetRef.current) {
      const target = draggingTargetRef.current;
      try {
        (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
      } catch {
        // Ignore fallback
      }
      draggingTargetRef.current = null;
      if (target === 'img') setImgOffset({ ...imgOffsetRef.current });
      else if (target === 'text') setTextOffset({ ...textOffsetRef.current });
      else if (target === 'stickers') setStickerOffset({ ...stickerOffsetRef.current });
    }
  };

  /** Canvas HD Synthesizer */
  const generateStoryFile = async (): Promise<File> => {
    const canvas = canvasRef.current || document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1920;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Không thể khởi tạo đồ hoạ canvas');

    const scaleFactor = 1080 / 600;

    if (mode === 'photo' && photoFileList[0]?.originFileObj) {
      const rawFile = photoFileList[0].originFileObj as File;
      const img = new Image();
      const imgUrl = URL.createObjectURL(rawFile);
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = reject;
        img.src = imgUrl;
      });

      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      const baseScale = Math.min(canvas.width / img.width, canvas.height / img.height);
      const finalScale = baseScale * imgScale;
      const w = img.width * finalScale;
      const h = img.height * finalScale;

      const centerX = canvas.width / 2 + imgOffsetRef.current.x * scaleFactor;
      const centerY = canvas.height / 2 + imgOffsetRef.current.y * scaleFactor;

      ctx.drawImage(img, centerX - w / 2, centerY - h / 2, w, h);
      ctx.restore();
      URL.revokeObjectURL(imgUrl);
    } else {
      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grad.addColorStop(0, selectedGradient.colors[0]);
      grad.addColorStop(1, selectedGradient.colors[1]);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    const activeText = text.trim();
    if (activeText) {
      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#ffffff';

      ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
      ctx.shadowBlur = 24;
      ctx.shadowOffsetY = 6;

      const fontSize = mode === 'text' ? 90 : 68;
      ctx.font = `700 ${fontSize}px ${selectedFont.family}`;

      const maxLineWidth = 920;
      const words = activeText.split(' ');
      const lines: string[] = [];
      let currentLine = '';

      for (const word of words) {
        const testLine = currentLine ? `${currentLine} ${word}` : word;
        if (ctx.measureText(testLine).width > maxLineWidth && currentLine) {
          lines.push(currentLine);
          currentLine = word;
        } else {
          currentLine = testLine;
        }
      }
      if (currentLine) lines.push(currentLine);

      const lineHeight = fontSize * 1.35;
      const textCenterX = canvas.width / 2 + textOffsetRef.current.x * scaleFactor;
      const textCenterY = canvas.height / 2 + textOffsetRef.current.y * scaleFactor;
      const startY = textCenterY - ((lines.length - 1) * lineHeight) / 2;

      lines.forEach((line, idx) => {
        ctx.fillText(line, textCenterX, startY + idx * lineHeight);
      });
      ctx.restore();
    }

    if (selectedStickers.length > 0) {
      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '120px "Segoe UI Emoji", "Apple Color Emoji", sans-serif';
      const spacing = 180;
      const totalWidth = (selectedStickers.length - 1) * spacing;

      const stickerCenterX = canvas.width / 2 + stickerOffsetRef.current.x * scaleFactor;
      const stickerCenterY = canvas.height * 0.8 + stickerOffsetRef.current.y * scaleFactor;
      const startX = stickerCenterX - totalWidth / 2;

      selectedStickers.forEach((stk, idx) => {
        ctx.fillText(stk, startX + idx * spacing, stickerCenterY);
      });
      ctx.restore();
    }

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error('Tạo ảnh story thất bại'));
            return;
          }
          const file = new File([blob], `story_${Date.now()}.jpg`, { type: 'image/jpeg' });
          resolve(file);
        },
        'image/jpeg',
        0.92,
      );
    });
  };

  const handleSubmit = async () => {
    if (mode === 'photo' && photoFileList.length === 0) {
      notify.error('Vui lòng chọn 1 bức ảnh cho photo story!');
      return;
    }
    if (mode === 'text' && !text.trim()) {
      notify.error('Vui lòng nhập nội dung cho text story!');
      return;
    }

    setIsSynthesizing(true);
    try {
      const generatedFile = await generateStoryFile();
      const finalCaption = text.trim();

      createStoryMutation.mutate(
        { file: generatedFile, caption: finalCaption || undefined },
        {
          onSuccess: () => {
            notify.success('Đã đăng story thành công!');
            handleClose();
          },
          onError: (err) => {
            const axiosErr = err as AxiosError<ApiResponse<null>>;
            notify.error(axiosErr.response?.data?.message || 'Đăng story thất bại!');
          },
        },
      );
    } catch (err) {
      notify.error(err instanceof Error ? err.message : 'Tạo story thất bại');
    } finally {
      setIsSynthesizing(false);
    }
  };

  return (
    <Modal
      title="Tạo Story"
      open={open}
      onCancel={handleClose}
      footer={null}
      width={1280}
      style={{ top: 10 }}
      styles={{ body: { padding: 20 } }}
    >
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      <div
        style={{
          display: 'flex',
          gap: 24,
          flexDirection: 'row',
          height: 'calc(90vh - 80px)',
          minHeight: 720,
          maxHeight: 850,
          overflow: 'hidden',
        }}
      >
        {/* Left Side: Preview Canvas */}
        <div
          style={{
            flex: '0 0 600px',
            height: '100%',
            borderRadius: 18,
            background: mode === 'photo' ? '#0f172a' : selectedGradient.css,
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 12px 36px rgba(0,0,0,0.22)',
            userSelect: 'none',
            touchAction: 'none',
          }}
        >
          {mode === 'photo' && (
            <div
              onPointerDown={(e) => handlePointerDown(e, 'img')}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: photoPreviewUrl ? 'grab' : 'default',
              }}
            >
              {photoPreviewUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  ref={imgElRef}
                  src={photoPreviewUrl}
                  alt="Story preview"
                  draggable={false}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    willChange: 'transform',
                    transform: `translate(${imgOffset.x}px, ${imgOffset.y}px) scale(${imgScale})`,
                  }}
                />
              ) : (
                <div style={{ color: 'rgba(255,255,255,0.6)', textAlign: 'center' }}>
                  <PictureOutlined style={{ fontSize: 48 }} />
                  <p style={{ marginTop: 8, fontSize: 13 }}>Chưa chọn hình ảnh</p>
                </div>
              )}
            </div>
          )}

          {text.trim() && (
            <div
              ref={textElRef}
              onPointerDown={(e) => handlePointerDown(e, 'text')}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              style={{
                position: 'absolute',
                top: '40%',
                left: 20,
                right: 20,
                zIndex: 5,
                color: '#fff',
                fontFamily: selectedFont.family,
                fontSize: mode === 'text' ? 28 : 22,
                fontWeight: 700,
                textAlign: 'center',
                textShadow: '0 2px 14px rgba(0,0,0,0.7)',
                wordBreak: 'break-word',
                cursor: 'grab',
                willChange: 'transform',
                transform: `translate(${textOffset.x}px, ${textOffset.y}px)`,
                border: '1px dashed rgba(255,255,255,0.3)',
                borderRadius: 8,
                padding: 8,
              }}
            >
              {text}
            </div>
          )}

          {selectedStickers.length > 0 && (
            <div
              ref={stickerElRef}
              onPointerDown={(e) => handlePointerDown(e, 'stickers')}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              style={{
                position: 'absolute',
                bottom: 40,
                left: 0,
                right: 0,
                display: 'flex',
                justifyContent: 'center',
                gap: 12,
                fontSize: 34,
                zIndex: 6,
                cursor: 'grab',
                willChange: 'transform',
                transform: `translate(${stickerOffset.x}px, ${stickerOffset.y}px)`,
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))',
              }}
            >
              {selectedStickers.map((stk, i) => (
                <span key={i}>{stk}</span>
              ))}
            </div>
          )}

          <div
            style={{
              position: 'absolute',
              bottom: 8,
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'rgba(255,255,255,0.7)',
              fontSize: 10,
              pointerEvents: 'none',
              zIndex: 10,
            }}
          >
            <DragOutlined /> Kéo thả ảnh/chữ/icon để di chuyển
          </div>
        </div>

        {/* Right Side: Settings */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            height: '100%',
            overflowY: 'auto',
            paddingRight: 6,
          }}
        >
          <Segmented
            block
            value={mode}
            onChange={(val) => setMode(val as StoryMode)}
            options={[
              { label: 'Tin văn bản', value: 'text', icon: <FontSizeOutlined /> },
              { label: 'Tin hình ảnh', value: 'photo', icon: <PictureOutlined /> },
            ]}
          />

          {mode === 'photo' && (
            <div
              style={{
                background: '#f8fafc',
                padding: 12,
                borderRadius: 10,
                border: '1px solid #e2e8f0',
              }}
            >
              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>
                Tải & Điều chỉnh ảnh:
              </div>
              <Upload
                showUploadList={false}
                beforeUpload={() => false}
                onChange={handlePhotoChange}
                accept="image/png,image/jpeg,image/webp,image/gif"
              >
                <Button size="middle" icon={<PlusOutlined />} style={{ fontSize: 14 }}>
                  {photoFileList.length > 0 ? 'Đổi ảnh khác' : 'Chọn ảnh từ máy tính'}
                </Button>
              </Upload>

              {photoFileList.length > 0 && (
                <div style={{ marginTop: 12 }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: 13,
                      color: '#64748b',
                    }}
                  >
                    <span>
                      <ZoomInOutlined /> Phóng to / Thu nhỏ:
                    </span>
                    <span>{Math.round(imgScale * 100)}%</span>
                  </div>
                  <Slider
                    min={0.5}
                    max={2.5}
                    step={0.05}
                    value={imgScale}
                    onChange={(val) => setImgScale(val)}
                  />
                </div>
              )}
            </div>
          )}

          <div>
            <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>
              {mode === 'text' ? 'Nội dung Story:' : 'Chú thích đè lên ảnh:'}
            </div>
            <TextArea
              placeholder="Nhập nội dung story..."
              maxLength={150}
              showCount
              rows={3}
              style={{ fontSize: 14 }}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          {mode === 'text' && (
            <div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  marginBottom: 8,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <BgColorsOutlined /> Phông nền (Gradients):
              </div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {STORY_GRADIENTS.map((grad) => (
                  <Tooltip key={grad.id} title={grad.name}>
                    <div
                      onClick={() => setSelectedGradient(grad)}
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        background: grad.css,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border:
                          selectedGradient.id === grad.id ? '3px solid #6366f1' : '2px solid #fff',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
                      }}
                    >
                      {selectedGradient.id === grad.id && (
                        <CheckOutlined style={{ color: '#fff', fontSize: 14 }} />
                      )}
                    </div>
                  </Tooltip>
                ))}
              </div>
            </div>
          )}

          <div>
            <div
              style={{
                fontSize: 15,
                fontWeight: 600,
                marginBottom: 8,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <FontSizeOutlined /> Kiểu chữ (Font):
            </div>
            <Space wrap size={[8, 8]}>
              {STORY_FONTS.map((font) => (
                <Button
                  key={font.id}
                  size="middle"
                  type={selectedFont.id === font.id ? 'primary' : 'default'}
                  onClick={() => setSelectedFont(font)}
                  style={{ fontFamily: font.family, fontSize: 14 }}
                >
                  {font.name}
                </Button>
              ))}
            </Space>
          </div>

          <div>
            <div
              style={{
                fontSize: 15,
                fontWeight: 600,
                marginBottom: 8,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <SmileOutlined /> Thêm nhãn dán Emoji (Tối đa 4):
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {STORY_STICKERS.map((stk) => (
                <div
                  key={stk}
                  onClick={() => toggleSticker(stk)}
                  style={{
                    fontSize: 24,
                    padding: '4px 10px',
                    borderRadius: 8,
                    cursor: 'pointer',
                    background: selectedStickers.includes(stk) ? '#e0e7ff' : '#f1f5f9',
                    border: selectedStickers.includes(stk)
                      ? '1px solid #6366f1'
                      : '1px solid transparent',
                  }}
                >
                  {stk}
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 'auto', paddingTop: 8, display: 'flex', gap: 8 }}>
            <Button size="middle" icon={<RotateLeftOutlined />} onClick={resetTransforms}>
              Đặt lại vị trí
            </Button>
            <Button
              type="primary"
              style={{ flex: 1 }}
              size="middle"
              loading={createStoryMutation.isPending || isSynthesizing}
              onClick={handleSubmit}
            >
              Chia sẻ lên tin (Story)
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateStoryModal;
