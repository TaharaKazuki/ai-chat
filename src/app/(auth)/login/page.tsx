'use client';
import { signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useAuth } from '@/app/context/AuthContext';
import { Button } from '@/components/ui/button';
import { auth, provider } from '@/lib/firebase/firebaseClient';

const LoginPage = () => {
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (currentUser) router.push('/conversation');
  }, [currentUser, router]);

  const handleLogin = () => {
    provider.setCustomParameters({ prompt: 'select_account' });
    signInWithPopup(auth, provider).catch((error) => {
      console.info(error);
    });
  };

  return <Button onClick={handleLogin}>Login</Button>;
};

export default LoginPage;
