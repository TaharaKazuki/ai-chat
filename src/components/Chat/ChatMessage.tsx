import React from 'react';

import BotAvatar from '../BotAvatar';

const ChatMessage = () => {
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
