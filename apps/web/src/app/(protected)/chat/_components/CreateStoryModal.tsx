'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Button, Input, Modal, Slider, Tooltip } from 'antd';
import type { TextAreaRef } from 'antd/es/input/TextArea';
import {
  AlignCenterOutlined,
  AlignLeftOutlined,
  AlignRightOutlined,
  CompressOutlined,
  CopyOutlined,
  DeleteOutlined,
  FontSizeOutlined,
  PictureOutlined,
  PlusOutlined,
  RotateRightOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import type { AxiosError } from 'axios';

import { useCreateStory } from '@/hook/useStories';
import { notify } from '@/lib/notify';
import { STORY_FONTS, STORY_GRADIENTS, STORY_STICKERS } from '@/constants/storyPresets';
import type { ApiResponse } from '@/types/api';

// ─── Canvas model ─────────────────────────────────────────────────────────────
// Everything is laid out on a fixed 1080x1920 canvas. The preview is that canvas scaled
// down, and preview + export share the same text layout, so the posted image matches
// exactly what the user arranged.
const W = 1080;
const H = 1920;
const CX = W / 2;
const CY = H / 2;
const MAX_TEXT_WIDTH = 920;
const SNAP_DISTANCE = 18;
const MAX_STICKERS = 8;
const MAX_TEXTS = 10;
const TEXT_PLACEHOLDER = 'Nhập chữ…';
const EMOJI_FONT = '"Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif';

const SOLID_BACKGROUNDS = [
  '#4F46E5',
  '#111827',
  '#0EA5E9',
  '#10B981',
  '#F59E0B',
  '#EF4444',
  '#F3F4F6',
];
const TEXT_COLORS = ['#FFFFFF', '#111827', '#4F46E5', '#FACC15', '#EF4444', '#22C55E', '#38BDF8'];

type Align = 'left' | 'center' | 'right';
type TextStyle = 'shadow' | 'dark' | 'light';
type Background = { kind: 'gradient'; colors: [string, string] } | { kind: 'solid'; color: string };
/** 'photo' | a text id (`t-…`) | a sticker id (`s-…`) */
type Selection = string | null;

interface Photo {
  url: string;
  natW: number;
  natH: number;
  zoom: number;
  x: number; // offset from canvas centre
  y: number;
  rot: number; // 0 | 90 | 180 | 270
}

interface Sticker {
  id: string;
  emoji: string;
  x: number;
  y: number;
  size: number;
}

interface TextLayer {
  id: string;
  value: string;
  x: number;
  y: number;
  size: number;
  color: string;
  align: Align;
  fontId: string;
  style: TextStyle;
}

const isTextId = (id: string | null): id is string => !!id && id.startsWith('t-');
const isStickerId = (id: string | null): id is string => !!id && id.startsWith('s-');

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

const backgroundCss = (bg: Background) =>
  bg.kind === 'solid'
    ? bg.color
    : `linear-gradient(to bottom right, ${bg.colors[0]}, ${bg.colors[1]})`;

/** Photo starts as "cover" (fills the canvas); zoom is relative to that. */
const photoRect = (p: Photo) => {
  const sideways = p.rot % 180 !== 0;
  const base = Math.max(W / (sideways ? p.natH : p.natW), H / (sideways ? p.natW : p.natH));
  return { w: p.natW * base * p.zoom, h: p.natH * base * p.zoom, cx: CX + p.x, cy: CY + p.y };
};

let measureCtx: CanvasRenderingContext2D | null = null;
const getMeasureCtx = () => (measureCtx ??= document.createElement('canvas').getContext('2d'));

type TextLayout = ReturnType<typeof layoutText>;

/** Wrap + position every line once; both the preview and the exported canvas draw from this. */
function layoutText(t: TextLayer, value: string, family: string) {
  const font = `700 ${t.size}px ${family}`;
  const ctx = getMeasureCtx();
  const measure = (s: string) => {
    if (!ctx) return s.length * t.size * 0.55;
    ctx.font = font;
    return ctx.measureText(s).width;
  };

  const raw: string[] = [];
  for (const paragraph of value.split('\n')) {
    let line = '';
    for (const word of paragraph.split(' ')) {
      const candidate = line ? `${line} ${word}` : word;
      if (line && measure(candidate) > MAX_TEXT_WIDTH) {
        raw.push(line);
        line = word;
      } else {
        line = candidate;
      }
    }
    raw.push(line);
  }

  const widths = raw.map(measure);
  const maxW = Math.max(1, ...widths);
  const lineHeight = t.size * 1.3;
  const padX = t.style === 'shadow' ? 0 : t.size * 0.3;
  const top0 = t.y - (raw.length * lineHeight) / 2;

  const lines = raw.map((text, i) => {
    const w = widths[i];
    const left =
      t.align === 'center' ? t.x - w / 2 : t.align === 'left' ? t.x - maxW / 2 : t.x + maxW / 2 - w;
    return { text, left, top: top0 + i * lineHeight, width: w };
  });

  const fg = t.style === 'light' && t.color === '#FFFFFF' ? '#111827' : t.color;
  const bg = t.style === 'dark' ? 'rgba(17, 24, 39, 0.62)' : t.style === 'light' ? '#FFFFFF' : null;

  return {
    font,
    family,
    size: t.size,
    lines,
    lineHeight,
    padX,
    radius: t.size * 0.24,
    fg,
    bg,
    shadow: t.style === 'shadow',
    box: {
      left: t.x - maxW / 2 - padX,
      top: top0,
      width: maxW + padX * 2,
      height: raw.length * lineHeight,
    },
  };
}

const loadImage = (url: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Không đọc được ảnh'));
    img.src = url;
  });

function drawText(ctx: CanvasRenderingContext2D, L: TextLayout) {
  ctx.save();
  ctx.font = L.font;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  for (const line of L.lines) {
    if (!line.text) continue;
    if (L.bg) {
      ctx.fillStyle = L.bg;
      ctx.beginPath();
      ctx.roundRect(line.left - L.padX, line.top, line.width + L.padX * 2, L.lineHeight, L.radius);
      ctx.fill();
    }
    if (L.shadow) {
      ctx.shadowColor = 'rgba(0, 0, 0, 0.55)';
      ctx.shadowBlur = 24;
      ctx.shadowOffsetY = 4;
    }
    ctx.fillStyle = L.fg;
    ctx.fillText(line.text, line.left, line.top + L.lineHeight / 2);
    ctx.shadowColor = 'transparent';
  }
  ctx.restore();
}

async function renderStory(o: {
  background: Background;
  photo: Photo | null;
  textLayouts: TextLayout[];
  stickers: Sticker[];
}): Promise<File> {
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Trình duyệt không hỗ trợ tạo ảnh');

  if (o.background.kind === 'solid') {
    ctx.fillStyle = o.background.color;
  } else {
    const g = ctx.createLinearGradient(0, 0, W, H);
    g.addColorStop(0, o.background.colors[0]);
    g.addColorStop(1, o.background.colors[1]);
    ctx.fillStyle = g;
  }
  ctx.fillRect(0, 0, W, H);

  if (o.photo) {
    const img = await loadImage(o.photo.url);
    const r = photoRect(o.photo);
    ctx.save();
    ctx.translate(r.cx, r.cy);
    ctx.rotate((o.photo.rot * Math.PI) / 180);
    ctx.drawImage(img, -r.w / 2, -r.h / 2, r.w, r.h);
    ctx.restore();
  }

  // Same stacking as the preview: texts in list order, stickers on top.
  o.textLayouts.forEach((layout) => drawText(ctx, layout));

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  for (const s of o.stickers) {
    ctx.font = `${s.size}px ${EMOJI_FONT}`;
    ctx.fillText(s.emoji, s.x, s.y);
  }

  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, 'image/jpeg', 0.92),
  );
  if (!blob) throw new Error('Tạo ảnh story thất bại');
  return new File([blob], `story_${Date.now()}.jpg`, { type: 'image/jpeg' });
}

// ─── Small UI pieces ──────────────────────────────────────────────────────────
function Section({
  title,
  extra,
  children,
}: {
  title: string;
  extra?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-[var(--border)] py-4 first:pt-0 last:border-b-0">
      <div className="mb-2.5 flex min-h-6 items-center justify-between gap-2">
        <h3 className="text-[12px] font-semibold uppercase tracking-wider text-[var(--muted)]">
          {title}
        </h3>
        {extra}
      </div>
      {children}
    </section>
  );
}

function Swatch({
  background,
  active,
  label,
  onClick,
}: {
  background: string;
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <Tooltip title={label}>
      <button
        type="button"
        aria-label={label}
        aria-pressed={active}
        onClick={onClick}
        className={`h-7 w-7 shrink-0 cursor-pointer rounded-full border transition-transform hover:scale-110 ${
          active ? 'outline-2 outline-offset-2 outline-[#4F46E5]' : 'border-[var(--border)]'
        }`}
        style={{ background }}
      />
    </Tooltip>
  );
}

// ─── Editor ───────────────────────────────────────────────────────────────────
function StoryEditor({ onClose }: { onClose: () => void }) {
  const createStory = useCreateStory();

  const [background, setBackground] = useState<Background>({
    kind: 'gradient',
    colors: STORY_GRADIENTS[1].colors,
  });
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [texts, setTexts] = useState<TextLayer[]>([]);
  const [stickers, setStickers] = useState<Sticker[]>([]);
  const [selected, setSelected] = useState<Selection>(null);
  const [caption, setCaption] = useState('');
  const [guides, setGuides] = useState({ v: false, h: false });
  const [isDragOver, setIsDragOver] = useState(false);
  const [busy, setBusy] = useState(false);
  const [nextId, setNextId] = useState(0);
  const [scale, setScale] = useState(0.3); // preview px per canvas px
  // next/font gives the app font a generated family name; canvas needs the real one.
  const [appFamily] = useState(
    () =>
      (typeof document !== 'undefined' &&
        getComputedStyle(document.body).getPropertyValue('--font-app-sans').trim()) ||
      'system-ui',
  );

  const previewRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textInputRef = useRef<TextAreaRef>(null);
  const dragRef = useRef<{
    target: string;
    startX: number;
    startY: number;
    origX: number;
    origY: number;
  } | null>(null);
  const selectedRef = useRef<Selection>(null);
  const publishRef = useRef<() => void>(() => {});

  const familyOf = (t: TextLayer) =>
    (STORY_FONTS.find((f) => f.id === t.fontId) ?? STORY_FONTS[0]).family.replace(
      'var(--font-app-sans)',
      appFamily,
    );

  // Empty layers show a faint placeholder in the preview (so they can be found and dragged)
  // but are never drawn into the posted image.
  const textLayouts = useMemo(
    () =>
      texts.map((t) => {
        const empty = !t.value.trim();
        return {
          id: t.id,
          empty,
          layout: layoutText(t, empty ? TEXT_PLACEHOLDER : t.value, familyOf(t)),
        };
      }),
    // familyOf only depends on appFamily
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [texts, appFamily],
  );

  const selectedText = texts.find((t) => t.id === selected) ?? null;
  const selectedSticker = stickers.find((s) => s.id === selected) ?? null;
  const hasContent = Boolean(photo || texts.some((t) => t.value.trim()) || stickers.length);

  useEffect(() => {
    selectedRef.current = selected;
  }, [selected]);

  // Keep the preview scale in sync with its rendered width.
  useEffect(() => {
    const el = previewRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / W));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Free the object URL when the photo is replaced or the editor closes.
  const photoUrl = photo?.url;
  useEffect(
    () => () => {
      if (photoUrl) URL.revokeObjectURL(photoUrl);
    },
    [photoUrl],
  );

  // ── Layer helpers ──────────────────────────────────────────────────────────
  const updateText = (id: string, patch: Partial<TextLayer>) =>
    setTexts((list) => list.map((t) => (t.id === id ? { ...t, ...patch } : t)));

  const positionOf = (target: string) => {
    if (target === 'photo') return { x: photo?.x ?? 0, y: photo?.y ?? 0 };
    const layer = isTextId(target)
      ? texts.find((t) => t.id === target)
      : stickers.find((s) => s.id === target);
    return { x: layer?.x ?? CX, y: layer?.y ?? CY };
  };

  const moveTo = (target: string, x: number, y: number) => {
    if (target === 'photo') setPhoto((p) => (p ? { ...p, x, y } : p));
    else if (isTextId(target)) updateText(target, { x, y });
    else setStickers((list) => list.map((s) => (s.id === target ? { ...s, x, y } : s)));
  };

  const moveBy = (target: string, dx: number, dy: number) => {
    if (target === 'photo') setPhoto((p) => (p ? { ...p, x: p.x + dx, y: p.y + dy } : p));
    else if (isTextId(target))
      setTexts((list) =>
        list.map((t) => (t.id === target ? { ...t, x: t.x + dx, y: t.y + dy } : t)),
      );
    else
      setStickers((list) =>
        list.map((s) => (s.id === target ? { ...s, x: s.x + dx, y: s.y + dy } : s)),
      );
  };

  /** Bring a text/sticker to the top of its stack, like grabbing a sheet of paper. */
  const bringToFront = (target: string) => {
    const toEnd = <T extends { id: string }>(list: T[]) => {
      const item = list.find((l) => l.id === target);
      return item && list[list.length - 1] !== item
        ? [...list.filter((l) => l.id !== target), item]
        : list;
    };
    if (isTextId(target)) setTexts(toEnd);
    else if (isStickerId(target)) setStickers(toEnd);
  };

  const select = (target: Selection) => {
    setSelected(target);
    if (target) bringToFront(target);
  };

  const removeLayer = (target: string) => {
    if (target === 'photo') setPhoto(null);
    else if (isTextId(target)) setTexts((list) => list.filter((t) => t.id !== target));
    else setStickers((list) => list.filter((s) => s.id !== target));
    setSelected(null);
  };

  /** Scroll wheel resizing for whatever is selected. */
  const resizeBy = (target: string, factor: number) => {
    if (target === 'photo')
      setPhoto((p) => (p ? { ...p, zoom: clamp(p.zoom * factor, 0.3, 4) } : p));
    else if (isTextId(target))
      setTexts((list) =>
        list.map((t) => (t.id === target ? { ...t, size: clamp(t.size * factor, 36, 180) } : t)),
      );
    else
      setStickers((list) =>
        list.map((s) => (s.id === target ? { ...s, size: clamp(s.size * factor, 60, 420) } : s)),
      );
  };

  const newId = (prefix: 't' | 's') => {
    setNextId((v) => v + 1);
    return `${prefix}-${nextId}`;
  };

  const focusTextInput = () => {
    // Wait for the controls of the newly selected layer to render.
    requestAnimationFrame(() => textInputRef.current?.focus());
  };

  const addText = (base?: TextLayer) => {
    if (texts.length >= MAX_TEXTS) {
      notify.warning(`Tối đa ${MAX_TEXTS} dòng chữ cho mỗi story`);
      return;
    }
    const n = texts.length;
    const id = newId('t');
    // A copy lands slightly below its source; a new one is staggered down the canvas.
    const layer: TextLayer = base
      ? { ...base, id, y: base.y + base.size * 1.6 }
      : {
          id,
          value: '',
          x: CX,
          y: CY + ((n % 5) - 2) * 170,
          size: 84,
          color: '#FFFFFF',
          align: 'center',
          fontId: STORY_FONTS[0].id,
          style: 'shadow',
        };
    setTexts((list) => [...list, layer]);
    setSelected(id);
    focusTextInput();
  };

  const loadPhoto = (file: File | undefined | null) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      notify.error('Chỉ hỗ trợ tệp hình ảnh');
      return;
    }
    const url = URL.createObjectURL(file);
    loadImage(url)
      .then((img) => {
        setPhoto({
          url,
          natW: img.naturalWidth,
          natH: img.naturalHeight,
          zoom: 1,
          x: 0,
          y: 0,
          rot: 0,
        });
        setSelected('photo');
      })
      .catch(() => {
        URL.revokeObjectURL(url);
        notify.error('Không đọc được ảnh này');
      });
  };

  const addSticker = (emoji: string) => {
    if (stickers.length >= MAX_STICKERS) {
      notify.warning(`Tối đa ${MAX_STICKERS} nhãn dán cho mỗi story`);
      return;
    }
    const n = stickers.length;
    const id = newId('s');
    // Lay new stickers out on a small grid in the lower third so they never stack exactly.
    const sticker = {
      id,
      emoji,
      x: CX + ((n % 3) - 1) * 230,
      y: H * 0.74 - Math.floor(n / 3) * 210,
      size: 170,
    };
    setStickers((list) => [...list, sticker]);
    setSelected(id);
  };

  const resetLayout = () => {
    setPhoto((p) => (p ? { ...p, zoom: 1, x: 0, y: 0 } : p));
    setTexts((list) =>
      list.map((t, i) => ({ ...t, x: CX, y: CY + (i - (list.length - 1) / 2) * t.size * 1.6 })),
    );
    setStickers((list) =>
      list.map((s, i) => ({ ...s, x: CX + (i - (list.length - 1) / 2) * 190, y: H * 0.8 })),
    );
  };

  // ── Pointer dragging (with centre snapping) ────────────────────────────────
  const startDrag = (e: React.PointerEvent, target: string) => {
    e.stopPropagation();
    select(target);
    const pos = positionOf(target);
    dragRef.current = { target, startX: e.clientX, startY: e.clientY, origX: pos.x, origY: pos.y };
    previewRef.current?.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const d = dragRef.current;
    if (!d) return;
    let x = d.origX + (e.clientX - d.startX) / scale;
    let y = d.origY + (e.clientY - d.startY) / scale;
    // Photo offsets are relative to the centre; other layers use absolute canvas coordinates.
    const centreX = d.target === 'photo' ? 0 : CX;
    const centreY = d.target === 'photo' ? 0 : CY;
    const snapV = Math.abs(x - centreX) < SNAP_DISTANCE;
    const snapH = Math.abs(y - centreY) < SNAP_DISTANCE;
    if (snapV) x = centreX;
    if (snapH) y = centreY;
    setGuides({ v: snapV, h: snapH });
    moveTo(d.target, x, y);
  };

  const endDrag = () => {
    dragRef.current = null;
    setGuides({ v: false, h: false });
  };

  // ── Publish ────────────────────────────────────────────────────────────────
  const publish = async () => {
    if (busy) return;
    if (!hasContent) {
      notify.warning('Hãy thêm ảnh, chữ hoặc nhãn dán cho story');
      return;
    }
    setBusy(true);
    try {
      const file = await renderStory({
        background,
        photo,
        textLayouts: textLayouts.filter((t) => !t.empty).map((t) => t.layout),
        stickers,
      });
      await createStory.mutateAsync({ file, caption: caption.trim() || undefined });
      notify.success('Đã đăng story!');
      onClose();
    } catch (err) {
      const axiosErr = err as AxiosError<ApiResponse<null>>;
      notify.error(
        axiosErr.response?.data?.message ||
          (err instanceof Error ? err.message : 'Đăng story thất bại'),
      );
    } finally {
      setBusy(false);
    }
  };

  useEffect(() => {
    publishRef.current = publish;
  });

  // ── Keyboard, wheel and clipboard shortcuts ────────────────────────────────
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        publishRef.current();
        return;
      }
      const el = e.target as HTMLElement;
      if (el.closest('input, textarea, [contenteditable="true"]')) return; // typing, not editing
      const target = selectedRef.current;
      if (!target) return;
      const step = e.shiftKey ? 50 : 10;
      const nudges: Record<string, [number, number]> = {
        ArrowLeft: [-step, 0],
        ArrowRight: [step, 0],
        ArrowUp: [0, -step],
        ArrowDown: [0, step],
      };
      if (nudges[e.key]) {
        e.preventDefault();
        moveBy(target, ...nudges[e.key]);
      } else if (e.key === 'Delete' || e.key === 'Backspace') {
        e.preventDefault();
        removeLayer(target);
      }
    };

    const onPaste = (e: ClipboardEvent) => {
      const file = Array.from(e.clipboardData?.files ?? []).find((f) =>
        f.type.startsWith('image/'),
      );
      if (file) {
        e.preventDefault();
        loadPhoto(file);
      }
    };

    const preview = previewRef.current;
    const onWheel = (e: WheelEvent) => {
      const target = selectedRef.current;
      if (!target) return;
      e.preventDefault();
      resizeBy(target, e.deltaY < 0 ? 1.06 : 1 / 1.06);
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('paste', onPaste);
    preview?.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('paste', onPaste);
      preview?.removeEventListener('wheel', onWheel);
    };
    // Handlers only use functional state updates and refs, so binding once is safe.
  }, []);

  // ── Render ─────────────────────────────────────────────────────────────────
  const selectionRing = (active: boolean): React.CSSProperties =>
    active
      ? {
          outline: '2px dashed rgba(255,255,255,0.95)',
          outlineOffset: 6,
          boxShadow: '0 0 0 1px rgba(0,0,0,0.25)',
        }
      : {};

  const photoBox = photo ? photoRect(photo) : null;

  return (
    <div className="flex flex-col gap-6 md:flex-row">
      {/* ── Preview ── */}
      <div className="flex flex-col items-center gap-2">
        <div
          ref={previewRef}
          className={`relative aspect-[9/16] w-full max-w-[300px] touch-none select-none overflow-hidden rounded-2xl md:h-[min(68vh,620px)] md:w-auto md:max-w-none ${
            isDragOver ? 'ring-4 ring-[#4F46E5]/60' : ''
          }`}
          style={{ background: backgroundCss(background) }}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerDown={() => setSelected(null)}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragOver(true);
          }}
          onDragLeave={() => setIsDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragOver(false);
            loadPhoto(e.dataTransfer.files[0]);
          }}
        >
          {photo && photoBox && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={photo.url}
              alt="Ảnh story"
              draggable={false}
              onPointerDown={(e) => startDrag(e, 'photo')}
              className="absolute max-w-none cursor-grab active:cursor-grabbing"
              style={{
                left: photoBox.cx * scale,
                top: photoBox.cy * scale,
                width: photoBox.w * scale,
                height: photoBox.h * scale,
                transform: `translate(-50%, -50%) rotate(${photo.rot}deg)`,
              }}
            />
          )}

          {textLayouts.map(({ id, empty, layout }) => (
            <div
              key={id}
              onPointerDown={(e) => startDrag(e, id)}
              onDoubleClick={focusTextInput}
              className="absolute rounded-md cursor-grab active:cursor-grabbing"
              style={{
                left: layout.box.left * scale,
                top: layout.box.top * scale,
                width: layout.box.width * scale,
                height: layout.box.height * scale,
                opacity: empty ? 0.55 : 1,
                ...selectionRing(selected === id),
              }}
            >
              {layout.lines.map((line, i) =>
                line.text ? (
                  <div
                    key={i}
                    className="absolute flex items-center whitespace-pre pointer-events-none"
                    style={{
                      left: (line.left - layout.padX - layout.box.left) * scale,
                      top: (line.top - layout.box.top) * scale,
                      width: (line.width + layout.padX * 2) * scale,
                      height: layout.lineHeight * scale,
                      paddingLeft: layout.padX * scale,
                      background: layout.bg ?? undefined,
                      borderRadius: layout.radius * scale,
                      color: layout.fg,
                      font: `700 ${layout.size * scale}px ${layout.family}`,
                      textShadow: layout.shadow
                        ? `0 ${4 * scale}px ${24 * scale}px rgba(0,0,0,0.55)`
                        : undefined,
                    }}
                  >
                    {line.text}
                  </div>
                ) : null,
              )}
            </div>
          ))}

          {stickers.map((s) => (
            <span
              key={s.id}
              onPointerDown={(e) => startDrag(e, s.id)}
              className="absolute leading-none rounded-lg cursor-grab active:cursor-grabbing"
              style={{
                left: s.x * scale,
                top: s.y * scale,
                fontSize: s.size * scale,
                fontFamily: EMOJI_FONT,
                transform: 'translate(-50%, -50%)',
                ...selectionRing(selected === s.id),
              }}
            >
              {s.emoji}
            </span>
          ))}

          {/* Snap guides */}
          {guides.v && (
            <div className="absolute inset-y-0 w-px pointer-events-none left-1/2 bg-white/80" />
          )}
          {guides.h && (
            <div className="absolute inset-x-0 h-px pointer-events-none top-1/2 bg-white/80" />
          )}

          {/* Empty state with the two most common first actions */}
          {!photo && texts.length === 0 && stickers.length === 0 && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center text-white">
              <p className="text-[15px] font-semibold">Bắt đầu tin của bạn</p>
              <div className="flex gap-2" onPointerDown={(e) => e.stopPropagation()}>
                <Button icon={<PictureOutlined />} onClick={() => fileInputRef.current?.click()}>
                  Chọn ảnh
                </Button>
                <Button icon={<FontSizeOutlined />} onClick={() => addText()}>
                  Thêm chữ
                </Button>
              </div>
              <p className="text-[12px] text-white/80">hoặc kéo thả / dán ảnh (Ctrl+V)</p>
            </div>
          )}
        </div>
        <p className="max-w-[340px] text-center text-[12px] leading-relaxed text-[var(--muted)]">
          Kéo để di chuyển · Cuộn chuột để phóng to · Mũi tên để dịch · Delete để xoá
        </p>
      </div>

      {/* ── Controls ── */}
      <div className="flex min-w-0 flex-1 flex-col md:h-[min(68vh,620px)]">
        <div className="flex-1 pr-1 overflow-y-auto">
          <Section
            title="Ảnh"
            extra={
              photo && (
                <Button
                  size="small"
                  type="text"
                  danger
                  icon={<DeleteOutlined />}
                  onClick={() => removeLayer('photo')}
                >
                  Xoá ảnh
                </Button>
              )
            }
          >
            {photo ? (
              <>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Button
                    size="small"
                    icon={<PictureOutlined />}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Đổi ảnh
                  </Button>
                  <Button
                    size="small"
                    icon={<RotateRightOutlined />}
                    onClick={() => setPhoto((p) => (p ? { ...p, rot: (p.rot + 90) % 360 } : p))}
                  >
                    Xoay 90°
                  </Button>
                  <Button
                    size="small"
                    icon={<CompressOutlined />}
                    onClick={() => setPhoto((p) => (p ? { ...p, zoom: 1, x: 0, y: 0 } : p))}
                  >
                    Vừa khung
                  </Button>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-14 text-[13px] text-[var(--muted)]">Thu phóng</span>
                  <Slider
                    className="flex-1"
                    min={30}
                    max={400}
                    value={Math.round(photo.zoom * 100)}
                    tooltip={{ formatter: (v) => `${v}%` }}
                    onChange={(v) => setPhoto((p) => (p ? { ...p, zoom: v / 100 } : p))}
                  />
                </div>
              </>
            ) : (
              <Button
                block
                icon={<PictureOutlined />}
                onClick={() => fileInputRef.current?.click()}
              >
                Chọn ảnh từ máy (hoặc kéo thả, Ctrl+V)
              </Button>
            )}
          </Section>

          <Section
            title={`Chữ (${texts.length}/${MAX_TEXTS})`}
            extra={
              <Button
                size="small"
                type="primary"
                ghost
                icon={<PlusOutlined />}
                onClick={() => addText()}
              >
                Thêm chữ
              </Button>
            }
          >
            {texts.length === 0 ? (
              <p className="text-[13px] text-[var(--muted)]">
                Thêm bao nhiêu dòng chữ tuỳ ý — mỗi dòng có font, màu, cỡ và vị trí riêng.
              </p>
            ) : (
              <div className="flex flex-wrap gap-1.5">
                {texts.map((t, i) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => {
                      select(t.id);
                      focusTextInput();
                    }}
                    className={`max-w-[160px] cursor-pointer truncate rounded-full border px-3 py-1 text-[12px] transition-colors ${
                      selected === t.id
                        ? 'border-[#4F46E5] bg-[#4F46E5] text-white'
                        : 'border-[var(--border)] bg-transparent text-foreground hover:border-[#4F46E5]'
                    }`}
                  >
                    {t.value.trim() || `Chữ ${i + 1} (trống)`}
                  </button>
                ))}
              </div>
            )}

            {selectedText ? (
              <div className="mt-4 flex flex-col gap-3 rounded-xl border border-[var(--border)] p-3">
                <Input.TextArea
                  ref={textInputRef}
                  value={selectedText.value}
                  onChange={(e) => updateText(selectedText.id, { value: e.target.value })}
                  placeholder="Nhập chữ hiển thị trên story… (Enter để xuống dòng)"
                  maxLength={150}
                  showCount
                  autoSize={{ minRows: 2, maxRows: 4 }}
                />
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {STORY_FONTS.map((f) => (
                    <Button
                      key={f.id}
                      size="small"
                      type={selectedText.fontId === f.id ? 'primary' : 'default'}
                      onClick={() => updateText(selectedText.id, { fontId: f.id })}
                      style={{ fontFamily: f.family }}
                    >
                      {f.name}
                    </Button>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-14 text-[13px] text-[var(--muted)]">Cỡ chữ</span>
                  <Slider
                    className="flex-1"
                    min={36}
                    max={180}
                    value={Math.round(selectedText.size)}
                    onChange={(v) => updateText(selectedText.id, { size: v })}
                  />
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {TEXT_COLORS.map((c) => (
                    <Swatch
                      key={c}
                      background={c}
                      label={`Màu chữ ${c}`}
                      active={selectedText.color === c}
                      onClick={() => updateText(selectedText.id, { color: c })}
                    />
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="flex gap-1">
                    {(
                      [
                        ['left', <AlignLeftOutlined key="l" />, 'Căn trái'],
                        ['center', <AlignCenterOutlined key="c" />, 'Căn giữa'],
                        ['right', <AlignRightOutlined key="r" />, 'Căn phải'],
                      ] as const
                    ).map(([value, icon, label]) => (
                      <Tooltip key={value} title={label}>
                        <Button
                          size="small"
                          aria-label={label}
                          type={selectedText.align === value ? 'primary' : 'default'}
                          icon={icon}
                          onClick={() => updateText(selectedText.id, { align: value })}
                        />
                      </Tooltip>
                    ))}
                  </div>
                  <div className="flex gap-1">
                    {(
                      [
                        ['shadow', 'Bóng chữ'],
                        ['dark', 'Nền tối'],
                        ['light', 'Nền sáng'],
                      ] as const
                    ).map(([value, label]) => (
                      <Button
                        key={value}
                        size="small"
                        type={selectedText.style === value ? 'primary' : 'default'}
                        onClick={() => updateText(selectedText.id, { style: value })}
                      >
                        {label}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 border-t border-[var(--border)] pt-3">
                  <Button
                    size="small"
                    icon={<CopyOutlined />}
                    onClick={() => addText(selectedText)}
                  >
                    Nhân bản
                  </Button>
                  <Button
                    size="small"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => removeLayer(selectedText.id)}
                  >
                    Xoá dòng này
                  </Button>
                </div>
              </div>
            ) : (
              texts.length > 0 && (
                <p className="mt-3 text-[12px] text-[var(--muted)]">
                  Chọn một dòng chữ (trên ảnh hoặc ở danh sách) để chỉnh sửa.
                </p>
              )
            )}
          </Section>

          <Section title="Màu nền">
            <div className="flex flex-wrap gap-2">
              {STORY_GRADIENTS.map((g) => (
                <Swatch
                  key={g.id}
                  label={g.name}
                  background={backgroundCss({ kind: 'gradient', colors: g.colors })}
                  active={background.kind === 'gradient' && background.colors[0] === g.colors[0]}
                  onClick={() => setBackground({ kind: 'gradient', colors: g.colors })}
                />
              ))}
              {SOLID_BACKGROUNDS.map((c) => (
                <Swatch
                  key={c}
                  label={`Nền ${c}`}
                  background={c}
                  active={background.kind === 'solid' && background.color === c}
                  onClick={() => setBackground({ kind: 'solid', color: c })}
                />
              ))}
            </div>
          </Section>

          <Section
            title={`Nhãn dán (${stickers.length}/${MAX_STICKERS})`}
            extra={
              selectedSticker && (
                <Button
                  size="small"
                  type="text"
                  danger
                  icon={<DeleteOutlined />}
                  onClick={() => removeLayer(selectedSticker.id)}
                >
                  Xoá nhãn
                </Button>
              )
            }
          >
            <div className="flex flex-wrap gap-1.5">
              {STORY_STICKERS.map((emoji) => (
                <button
                  key={emoji}
                  type="button"
                  aria-label={`Thêm nhãn dán ${emoji}`}
                  onClick={() => addSticker(emoji)}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-[var(--border)] bg-transparent text-[22px] transition-colors hover:bg-[var(--border)]"
                  style={{ fontFamily: EMOJI_FONT }}
                >
                  {emoji}
                </button>
              ))}
            </div>
            {selectedSticker && (
              <div className="flex items-center gap-3 mt-3">
                <span className="w-14 text-[13px] text-[var(--muted)]">Kích cỡ</span>
                <Slider
                  className="flex-1"
                  min={60}
                  max={420}
                  value={Math.round(selectedSticker.size)}
                  onChange={(v) =>
                    setStickers((list) =>
                      list.map((s) => (s.id === selectedSticker.id ? { ...s, size: v } : s)),
                    )
                  }
                />
              </div>
            )}
          </Section>

          <Section title="Chú thích">
            <Input
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Hiện bên dưới story (không bắt buộc)"
              maxLength={200}
              showCount
            />
            <p className="mt-2 text-[12px] text-[var(--muted)]">
              Tin hiển thị với bạn bè của bạn trong 24 giờ.
            </p>
          </Section>
        </div>

        <div className="flex flex-wrap items-center gap-2 border-t border-[var(--border)] pt-4">
          <Button icon={<UndoOutlined />} onClick={resetLayout} disabled={!hasContent}>
            Đặt lại bố cục
          </Button>
          <div className="flex-1" />
          <Button onClick={onClose}>Huỷ</Button>
          <Tooltip title="Ctrl + Enter">
            <Button type="primary" loading={busy} disabled={!hasContent} onClick={publish}>
              Đăng tin
            </Button>
          </Tooltip>
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/gif"
        hidden
        onChange={(e) => {
          loadPhoto(e.target.files?.[0]);
          e.target.value = ''; // allow picking the same file again
        }}
      />
    </div>
  );
}

interface CreateStoryModalProps {
  open: boolean;
  onClose: () => void;
}

const CreateStoryModal = ({ open, onClose }: CreateStoryModalProps) => (
  <Modal
    title="Tạo tin mới"
    open={open}
    onCancel={onClose}
    footer={null}
    width="min(1000px, 100vw)"
    centered
    destroyOnHidden // fresh editor every time it opens
  >
    <StoryEditor onClose={onClose} />
  </Modal>
);

export default CreateStoryModal;
