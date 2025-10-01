import CreateRoomModal from '../CreateRoomModal';
import { useState } from 'react';

export default function CreateRoomModalExample() {
  const [open, setOpen] = useState(true);

  return (
    <CreateRoomModal 
      open={open} 
      onOpenChange={setOpen}
      onCreateRoom={(code) => console.log('Room created with code:', code)}
    />
  );
}
