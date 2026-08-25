import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken');
  if (token) {
    redirect('/chat');
  }

  return <section className="min-h-full">{children}</section>;
}
