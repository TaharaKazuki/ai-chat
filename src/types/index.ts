import { type Timestamp } from 'firebase/firestore';

export interface ChatRoom {
  id: string;
  type: string;
  user_id: string;
  first_message: string;
  last_updated: Timestamp;
}
