import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface JoinRoomModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onJoinRoom: (roomCode: string) => void;
}

export default function JoinRoomModal({ open, onOpenChange, onJoinRoom }: JoinRoomModalProps) {
  const [roomCode, setRoomCode] = useState("");

  const handleJoin = () => {
    if (roomCode.trim()) {
      onJoinRoom(roomCode.toUpperCase());
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md" data-testid="modal-join-room">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">Join Room</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Enter the 6-character room code to join the conversation
            </p>
            <Input
              placeholder="Enter room code"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
              className="text-center text-lg font-mono tracking-widest uppercase"
              maxLength={6}
              data-testid="input-room-code"
              onKeyDown={(e) => e.key === 'Enter' && handleJoin()}
            />
            <Button
              onClick={handleJoin}
              className="w-full"
              size="lg"
              disabled={roomCode.length !== 6}
              data-testid="button-join-room"
            >
              Join Room
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
