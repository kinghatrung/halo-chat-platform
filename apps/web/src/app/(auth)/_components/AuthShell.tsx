import Image from 'next/image';
import { ConfigProvider } from 'antd';
import { APP_LOGO, APP_NAME, APP_TAGLINE } from '@/constants/brand';

// Same scene and timing as the mobile welcome screen (apps/mobile/app/(auth)/welcome.tsx):
// three chat bubbles bobbing at their own pace over two slowly "breathing" glows.
const BUBBLES = [
  {
    position: 'right-0 top-0 max-w-[82%]',
    shape: 'rounded-tr-sm bg-white/95',
    bob: { from: '0px', to: '-8px', duration: '2.5s' },
    name: 'Zahri K.',
    avatarColor: '#F59E0B',
    online: true,
    text: 'Chào bạn! Hôm nay thế nào rồi?',
  },
  {
    position: 'left-0 top-[40%] max-w-[85%]',
    shape: 'rounded-tl-sm bg-white/90',
    bob: { from: '6px', to: '-4px', duration: '2.2s' },
    text: 'Mình vừa gửi tài liệu cho bạn rồi nhé',
  },
  {
    position: 'bottom-0 left-6 w-80',
    shape: 'rounded-bl-sm bg-white',
    bob: { from: '-10px', to: '2px', duration: '2.8s' },
    name: 'Minh Thảo',
    avatarColor: '#10B981',
    time: 'Vừa xong',
    text: 'Tuyệt vời quá! Cảm ơn bạn',
  },
];

interface AuthShellProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer: React.ReactNode;
}

export default function AuthShell({ title, subtitle, children, footer }: AuthShellProps) {
  return (
    <div className="flex h-dvh flex-col overflow-hidden md:flex-row">
      {/* Brand panel (desktop) */}
      <div className="auth-brand-panel hidden flex-1 flex-col justify-center px-16 py-10 text-white md:flex">
        <div className="auth-glow -right-20 -top-20 h-80 w-80 bg-white" />
        <div className="auth-glow auth-glow--alt -left-20 top-1/3 h-72 w-72 bg-[#38BDF8]" />

        <div className="relative z-1 w-full max-w-120">
          <div className="fade-up mb-8 flex items-center gap-3">
            <Image src={APP_LOGO} alt={APP_NAME} width={44} height={44} className="rounded-xl" />
            <span className="text-[26px] font-bold tracking-wide">{APP_NAME}</span>
          </div>
          <h1 className="fade-up mb-3 text-balance text-[42px] font-extrabold leading-[1.15] [animation-delay:80ms]">
            {APP_TAGLINE}.
          </h1>
          <p className="fade-up text-[17px] leading-relaxed text-white/90 [animation-delay:160ms]">
            Nhắn tin, chia sẻ và giữ liên lạc với bạn bè, đồng nghiệp mọi lúc mọi nơi.
          </p>

          {/* Floating chat bubbles */}
          <div className="relative mt-10 h-60 w-full max-w-110">
            <span className="absolute left-6 top-2 h-3 w-3 rounded-full bg-white/30" />
            <span className="absolute bottom-6 right-8 h-4 w-4 rounded-full bg-white/25" />

            {BUBBLES.map((b, i) => (
              // Outer: one-off entrance. Inner: endless bobbing (two transforms can't share one element).
              <div
                key={b.text}
                className={`fade-up absolute ${b.position}`}
                style={{ animationDelay: `${300 + i * 180}ms` }}
              >
                <div
                  className={`auth-bob rounded-2xl px-4 py-3 text-[#1c1d2b] shadow-[0_12px_28px_rgba(26,9,51,0.25)] ${b.shape}`}
                  style={
                    {
                      '--bob-from': b.bob.from,
                      '--bob-to': b.bob.to,
                      animationDuration: b.bob.duration,
                    } as React.CSSProperties
                  }
                >
                  {b.name ? (
                    <div className="flex items-center gap-2.5">
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[13px] font-bold text-white"
                        style={{ background: b.avatarColor }}
                      >
                        {b.name.charAt(0)}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-[14px] font-bold">{b.name}</span>
                          {b.online && <span className="h-2 w-2 rounded-full bg-emerald-500" />}
                          {b.time && <span className="text-[12px] text-gray-400">{b.time}</span>}
                        </div>
                        <p className="text-[14px] font-medium text-gray-700">{b.text}</p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-[14px] font-semibold text-[#3730a3]">{b.text}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form panel */}
      <div className="flex flex-1 items-center justify-center overflow-y-auto bg-background p-4">
        <div className="auth-card w-full max-w-100 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_8px_30px_rgba(30,27,75,0.06)]">
          <div className="mb-5 text-center">
            <Image
              src={APP_LOGO}
              alt={APP_NAME}
              width={44}
              height={44}
              priority
              className="mx-auto mb-3 rounded-xl"
            />
            <h2 className="mb-1 text-[22px] font-bold text-foreground">{title}</h2>
            <p className="text-[14px] text-[var(--muted)]">{subtitle}</p>
          </div>

          {/* Tighter form rhythm so the longer sign-up form still fits one screen. */}
          <ConfigProvider
            theme={{
              components: { Form: { itemMarginBottom: 14, verticalLabelPadding: '0 0 4px' } },
            }}
          >
            {children}
          </ConfigProvider>

          <div className="mt-4 border-t border-[var(--border)] pt-4 text-center text-[14px] text-[var(--muted)]">
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
}
