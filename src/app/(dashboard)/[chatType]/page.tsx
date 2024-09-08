import { notFound } from 'next/navigation';

import Chat from '@/components/Chat/Chat';

type ChatTypePageProps = {
  params: {
    chatType: string;
  };
};

const ChatTypePage = ({ params }: ChatTypePageProps) => {
  const allowedChatType = [
    'conversation',
    'image_generation',
    'text_to_speech',
    'speech_to_text',
    'image_analysis',
  ];

  if (!allowedChatType.includes(params.chatType)) return notFound();

  return <Chat />;
};

export default ChatTypePage;
