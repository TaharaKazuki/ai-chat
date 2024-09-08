import React from 'react';

import ChatForm from '@/components/Chat/ChatForm';
import ChatMessage from '@/components/Chat/ChatMessage';

const Chat = () => {
  return (
    <>
      <ChatMessage />
      <ChatForm />
    </>
  );
};

export default Chat;
