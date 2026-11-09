import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import SignInClient from './(auth)/signin/SignInClient';

export default async function Home() {
  const cookieStore = await cookies();
  // The access cookie lives 15 min; the refresh cookie keeps the session, axios refreshes on first 401.
  const token = cookieStore.has('accessToken') || cookieStore.has('refreshToken');
  if (token) redirect('/chat');

  // Logged-out visitors (and search engines) get the sign-in screen here instead of a redirect:
  // Google reads the site name and favicon from the home page, and a redirect has neither.
  return (
    <section className="min-h-full">
      <SignInClient />
    </section>
  );
}
