'use client';

import {
  FileImage,
  FileOutput,
  FileSearch2,
  MessageCircle,
  Speech,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import BotAvatar from '@/components/BotAvatar';
import { cn } from '@/lib/utils';

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
  const pathname = usePathname();
  return (
    <div className="h-screen bg-gray-900 p-3 text-white">
      <div className="flex flex-row items-center gap-3">
        <BotAvatar />
        <h1 className="text-xl font-bold">AI Chat App</h1>
      </div>
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
    </div>
  );
};

export default Sidebar;
