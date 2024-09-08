'use client';

import {
  Ellipsis,
  FileImage,
  FileOutput,
  FileSearch2,
  MessageCircle,
  Speech,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import BotAvatar from '@/components/BotAvatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { db } from '@/lib/firebase/firebaseClient';
import { useAuth } from '@/app/context/AuthContext';
import { ChatRoom } from '@/types';

const routes = [
  {
    label: 'Conversation',
    href: '/conversation',
    color: 'text-violet-500',
    Icon: MessageCircle,
  },
  {
    label: 'Image Generation',
    href: '/image_generation',
    color: 'text-blue-500',
    Icon: FileImage,
  },
  {
    label: 'Text to Speech',
    href: '/text_to_speech',
    color: 'text-red-500',
    Icon: FileOutput,
  },
  {
    label: 'Speech to Text',
    href: '/speech_to_text',
    color: 'text-green-500',
    Icon: Speech,
  },
  {
    label: 'Image Analysis',
    href: '/image_analysis',
    color: 'text-orange-500',
    Icon: FileSearch2,
  },
];

const Sidebar = () => {
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);
  const pathname = usePathname();

  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) return;
    const q = query(
      collection(db, 'chats'),
      where('user_id', '==', currentUser?.uid),
      orderBy('last_updated', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapShot) => {
      const fetchChatRooms = snapShot.docs.map((doc) => ({
        id: doc.id,
        type: doc.data().type,
        user_id: doc.data().user_id,
        last_updated: doc.data().last_updated,
        first_message: doc.data().first_message,
      }));
      setChatRooms(fetchChatRooms);
    });

    return () => unsubscribe();
  }, []);

  const handleDeleteChat = async (chatId: string) => {
    console.info('chatId', chatId);
  };

  return (
    <div className="flex h-screen flex-col space-y-4 bg-gray-900 p-3 text-white">
      {/* Title & Logo */}
      <Link href="/" className="flex items-center">
        <div className="mr-3 pl-3">
          <BotAvatar />
        </div>
        <h1 className="text-xl font-bold">AI Chat App</h1>
      </Link>
      {/* ChatRoom Type */}
      <div className="mt-3 space-y-1">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className={cn(
              'block p-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/10 transition rounded-lg',
              pathname.startsWith(route.href) && 'bg-white/10'
            )}
          >
            <div className="flex items-center">
              <route.Icon className={cn('h-5 w-5, mr-3', route.color)} />
              <p>{route.label}</p>
            </div>
          </Link>
        ))}
      </div>
      {/* ChatRoom Area */}
      <div className="flex flex-1 flex-col space-y-1 overflow-hidden">
        <h2 className="px-2 py-4 text-xs font-medium">Chat Room</h2>
        <div className="overflow-auto">
          {chatRooms.map((room) => (
            <Link
              href={`/${room.type}/${room.id}`}
              key={room.id}
              className={cn(
                'block p-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/10 transition rounded-lg',
                pathname === `/${room.type}/${room.id}` && 'bg-white/10'
              )}
            >
              <div className="flex flex-row items-center justify-between">
                <p className="truncate font-medium">{room.first_message}</p>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Ellipsis size={16} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => handleDeleteChat(room.id)}>
                      削除
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
