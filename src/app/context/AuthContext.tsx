'use client';

import { User } from 'firebase/auth';
import { createContext, type ReactNode, useEffect, useState } from 'react';

import { auth } from '@/lib/firebase/firebaseClient';

type AuthContextState = {
  currentUser: User | null;
};

const AuthContext = createContext<AuthContextState | undefined>(undefined);

type AuthContextProps = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};
