import RoomHeader from '../RoomHeader';

export default function RoomHeaderExample() {
  return (
    <RoomHeader 
      roomCode="ABC123" 
      userCount={7} 
      maxUsers={10}
      onLeave={() => console.log('Leave room clicked')}
    />
  );
}
