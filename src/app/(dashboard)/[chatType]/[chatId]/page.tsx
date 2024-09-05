import { notFound } from 'next/navigation';

type ChatRoomPageProps = {
  params: {
    chatType: string;
  };
};

const ChatRoomPage = ({ params }: ChatRoomPageProps) => {
  const allowedChatType = [
    'conversation',
    'image_generation',
    'text_to_speech',
    'speech_to_text',
    'image_analysis',
  ];

  if (!allowedChatType.includes(params.chatType)) return notFound();

  return <div>ChatRoomPage</div>;
};

export default ChatRoomPage;
