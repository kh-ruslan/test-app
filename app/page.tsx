import Login from '@/components/login';
import Onboarding from '@/components/onboarding';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Login />
      <Onboarding />
    </main>
  );
}
