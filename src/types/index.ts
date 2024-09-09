import { type Timestamp } from 'firebase/firestore';

export type ChatRoom = {
  id: string;
  type: string;
  user_id: string;
  first_message: string;
  last_updated: Timestamp;
};

export type TextMessage = {
  id: string;
  content: string;
  type: string;
  created_at: Timestamp;
  sender: 'user' | 'assistant';
};
