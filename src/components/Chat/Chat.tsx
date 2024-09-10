import React from 'react';

import ChatForm from '@/components/Chat/ChatForm';
import ChatMessage from '@/components/Chat/ChatMessage';

type ChatProps = {
  chatId?: string;
  chatType: string;
};

const Chat = ({ chatId, chatType }: ChatProps) => {
  return (
    <>
      <ChatMessage chatId={chatId} chatType={chatType} />
      <ChatForm chatId={chatId} />
    </>
  );
};

export default Chat;
