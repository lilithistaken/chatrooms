import ChatRoom from '../ChatRoom';

export default function ChatRoomExample() {
  return (
    <ChatRoom 
      roomCode="ABC123" 
      username="Alice"
      onLeave={() => console.log('Leave room clicked')}
    />
  );
}
