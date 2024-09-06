'use client';
import { signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { auth, provider } from '@/lib/firebase/firebaseClient';
import { useAuth } from '@/app/context/AuthContext';
import { useEffect } from 'react';

const LoginPage = () => {
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (currentUser) router.push('/conversation');
  }, [currentUser]);

  const handleLogin = () => {
    provider.setCustomParameters({ prompt: 'select_account' });
    signInWithPopup(auth, provider).catch((error) => {
      console.info(error);
    });
  };

  return <Button onClick={handleLogin}>Login</Button>;
};

export default LoginPage;
