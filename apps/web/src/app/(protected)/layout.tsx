import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import { SocketProvider } from '@/providers/SocketProvider';
import { CallProvider } from '@/providers/CallProvider';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  // The access cookie lives 15 min; the refresh cookie keeps the session, axios refreshes on first 401.
  const token = cookieStore.has('accessToken') || cookieStore.has('refreshToken');
  if (!token) {
    redirect('/signin');
  }

  return (
    <section className="min-h-full">
      <SocketProvider>
        <CallProvider>{children}</CallProvider>
      </SocketProvider>
    </section>
  );
}
