import { notFound } from 'next/navigation';

type ChatTypePageProps = {
  params: {
    chatType: string;
  };
};

const ChatTypePage = ({ params }: ChatTypePageProps) => {
  console.info(params);

  const allowedChatType = [
    'conversation',
    'image_generation',
    'text_to_speech',
    'speech_to_text',
    'image_analysis',
  ];

  if (!allowedChatType.includes(params.chatType)) {
    return notFound();
  }

  return <div>ChatTypePage</div>;
};

export default ChatTypePage;
