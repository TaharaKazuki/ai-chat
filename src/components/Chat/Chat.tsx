import React from 'react';

import ChatForm from '@/components/Chat/ChatForm';
import ChatMessage from '@/components/Chat/ChatMessage';

type ChatProps = {
  chatId: string;
};

const Chat = ({ chatId }: ChatProps) => {
  return (
    <>
      <ChatMessage chatId={chatId} />
      <ChatForm />
    </>
  );
};

export default Chat;
