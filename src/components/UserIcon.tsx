'use client';

import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useAuth } from '@/app/context/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { auth } from '@/lib/firebase/firebaseClient';

const UserIcon = () => {
  const router = useRouter();
  const { currentUser } = useAuth();
  const photoURL = currentUser?.photoURL ? currentUser.photoURL : undefined;

  useEffect(() => {
    if (!currentUser) router.push('/login');
  }, [currentUser, router]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        router.push('/login');
      })
      .catch((error) => {
        console.info(error);
      });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="size-8">
          <AvatarImage src={photoURL} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{currentUser?.displayName}</DropdownMenuLabel>
        <DropdownMenuItem onClick={handleLogout}>ログアウト</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserIcon;
