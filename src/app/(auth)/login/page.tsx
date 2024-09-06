'use client';
import { signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { auth, provider } from '@/lib/firebase/firebaseClient';

const LoginPage = () => {
  const router = useRouter();
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        router.push('/conversation');
      })
      .catch((error) => {
        console.info(error);
      });
  };

  return <Button onClick={handleLogin}>page</Button>;
};

export default LoginPage;
