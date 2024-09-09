'use client';

import {
  query,
  collection,
  where,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
import React, { useEffect } from 'react';

import BotAvatar from '../BotAvatar';
import { db } from '@/lib/firebase/firebaseClient';

type ChatMessageProps = {
  chatId: string;
};

const ChatMessage = ({ chatId }: ChatMessageProps) => {
  console.info(chatId);
  useEffect(() => {
    const q = query(
      collection(db, 'chats'),
      where('user_id', '==', 'currentUser?.uid'),
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
      // setChatRooms(fetchChatRooms);
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex-1 space-y-4 overflow-auto p-4">
      <div className="flex space-x-4">
        <BotAvatar />
        <div>
          <div className="whitespace-nowrap break-all rounded-lg bg-white p-4 shadow">
            <p>message</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
