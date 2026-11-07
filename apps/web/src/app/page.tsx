import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function Home() {
  const cookieStore = await cookies();
  // The access cookie lives 15 min; the refresh cookie keeps the session, axios refreshes on first 401.
  const token = cookieStore.has('accessToken') || cookieStore.has('refreshToken');

  if (token) {
    redirect('/chat');
  } else {
    redirect('/signin');
  }
}
