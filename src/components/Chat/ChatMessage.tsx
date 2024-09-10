'use client';

import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

import BotAvatar from '@/components/BotAvatar';
import Panel from '@/components/Panel';
import UserAvatar from '@/components/UserAvatar';
import { db } from '@/lib/firebase/firebaseClient';
import { TextMessage } from '@/types';

type ChatMessageProps = {
  chatId?: string;
  chatType: string;
};

const ChatMessage = ({ chatId, chatType }: ChatMessageProps) => {
  const [messages, setMessages] = useState<TextMessage[]>([]);

  useEffect(() => {
    if (!chatId) return;
    const q = query(
      collection(db, 'chats', chatId, 'messages'),
      orderBy('created_at', 'asc')
    );

    const unsubscribe = onSnapshot(q, (snapShot) => {
      const fetchMessages = snapShot.docs.map((doc) => ({
        id: doc.id,
        content: doc.data().content,
        type: doc.data().type,
        created_at: doc.data().created_at,
        sender: doc.data().sender,
      }));
      setMessages(fetchMessages);
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!chatId ? (
        <Panel chatType={chatType} />
      ) : (
        <div className="flex-1 space-y-4 overflow-auto p-4">
          {messages.map((message) => (
            <div className="flex space-x-4" key={message.id}>
              {message.sender === 'user' ? <UserAvatar /> : <BotAvatar />}
              <div>
                <div className="whitespace-pre-wrap break-all rounded-lg bg-white p-4 shadow">
                  <p>{message.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ChatMessage;
