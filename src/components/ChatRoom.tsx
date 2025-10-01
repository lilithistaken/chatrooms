import RoomHeader from "./RoomHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import UserList from "./UserList";
import { useState } from "react";

interface User {
  id: string;
  username: string;
  isHost?: boolean;
  userColor?: string;
}

interface Message {
  id: string;
  username: string;
  message: string;
  timestamp: Date;
  imageUrl?: string;
  isSystem?: boolean;
  userColor?: string;
}

interface ChatRoomProps {
  roomCode: string;
  username: string;
  onLeave: () => void;
}

export default function ChatRoom({ roomCode, username, onLeave }: ChatRoomProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      username: 'System',
      message: `${username} created the room`,
      timestamp: new Date(Date.now() - 120000),
      isSystem: true,
    }
  ]);

  const [users] = useState<User[]>([
    { id: '1', username, isHost: true, userColor: 'hsl(260, 80%, 65%)' },
    { id: '2', username: 'Bob', userColor: 'hsl(142, 70%, 50%)' },
    { id: '3', username: 'Charlie', userColor: 'hsl(38, 90%, 60%)' },
  ]);

  const handleSendMessage = (message: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      username,
      message,
      timestamp: new Date(),
      userColor: 'hsl(260, 80%, 65%)',
    };
    setMessages([...messages, newMessage]);
  };

  const handleSendImage = (imageFile: File) => {
    const imageUrl = URL.createObjectURL(imageFile);
    const newMessage: Message = {
      id: Date.now().toString(),
      username,
      message: '',
      timestamp: new Date(),
      imageUrl,
      userColor: 'hsl(260, 80%, 65%)',
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex h-screen flex-col">
      <RoomHeader
        roomCode={roomCode}
        userCount={users.length}
        maxUsers={10}
        onLeave={onLeave}
      />
      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-col flex-1">
          <MessageList messages={messages} />
          <MessageInput
            onSendMessage={handleSendMessage}
            onSendImage={handleSendImage}
          />
        </div>
        <UserList users={users} userCount={users.length} maxUsers={10} />
      </div>
    </div>
  );
}
