import JoinRoomModal from '../JoinRoomModal';
import { useState } from 'react';

export default function JoinRoomModalExample() {
  const [open, setOpen] = useState(true);

  return (
    <JoinRoomModal 
      open={open} 
      onOpenChange={setOpen}
      onJoinRoom={(code) => console.log('Joining room with code:', code)}
    />
  );
}
