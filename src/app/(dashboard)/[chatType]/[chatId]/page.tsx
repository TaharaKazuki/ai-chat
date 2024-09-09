import { notFound } from 'next/navigation';

import Chat from '@/components/Chat/Chat';

type ChatRoomPageProps = {
  params: {
    chatType: string;
    chatId: string;
  };
};

const ChatRoomPage = ({ params }: ChatRoomPageProps) => {
  const { chatId, chatType } = params;

  const allowedChatType = [
    'conversation',
    'image_generation',
    'text_to_speech',
    'speech_to_text',
    'image_analysis',
  ];

  if (!allowedChatType.includes(chatType)) return notFound();

  return <Chat chatId={chatId} chatType={chatType} />;
};

export default ChatRoomPage;
