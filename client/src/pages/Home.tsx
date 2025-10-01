import { Button } from "@/components/ui/button";
import { MessageSquare, Users, Image } from "lucide-react";
import { useState } from "react";
import CreateRoomModal from "@/components/CreateRoomModal";
import JoinRoomModal from "@/components/JoinRoomModal";
import ChatRoom from "@/components/ChatRoom";

export default function Home() {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [currentRoom, setCurrentRoom] = useState<string | null>(null);
  const [username] = useState(`User${Math.floor(Math.random() * 1000)}`);

  const handleCreateRoom = (roomCode: string) => {
    setCurrentRoom(roomCode);
  };

  const handleJoinRoom = (roomCode: string) => {
    setCurrentRoom(roomCode);
  };

  const handleLeaveRoom = () => {
    setCurrentRoom(null);
  };

  if (currentRoom) {
    return <ChatRoom roomCode={currentRoom} username={username} onLeave={handleLeaveRoom} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center space-y-6 mb-12">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
            Join the Conversation
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create or join private chat rooms with unique codes. Share messages and images with up to 10 people in real-time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <Button
            size="lg"
            className="h-auto py-6 flex flex-col gap-3"
            onClick={() => setCreateModalOpen(true)}
            data-testid="button-create-room"
          >
            <MessageSquare className="h-6 w-6" />
            <div>
              <div className="font-semibold text-lg">Create Room</div>
              <div className="text-sm opacity-90 font-normal">Start a new chat room</div>
            </div>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-auto py-6 flex flex-col gap-3"
            onClick={() => setJoinModalOpen(true)}
            data-testid="button-join-room"
          >
            <Users className="h-6 w-6" />
            <div>
              <div className="font-semibold text-lg">Join Room</div>
              <div className="text-sm opacity-70 font-normal">Enter a room code</div>
            </div>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-lg bg-card border border-card-border">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Real-time Chat</h3>
            <p className="text-sm text-muted-foreground">Instant messaging with live updates</p>
          </div>
          <div className="p-6 rounded-lg bg-card border border-card-border">
            <div className="h-12 w-12 rounded-full bg-chart-2/10 flex items-center justify-center mx-auto mb-4">
              <Image className="h-6 w-6 text-chart-2" />
            </div>
            <h3 className="font-semibold mb-2">Share Images</h3>
            <p className="text-sm text-muted-foreground">Upload and share images instantly</p>
          </div>
          <div className="p-6 rounded-lg bg-card border border-card-border">
            <div className="h-12 w-12 rounded-full bg-chart-3/10 flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-chart-3" />
            </div>
            <h3 className="font-semibold mb-2">Private Rooms</h3>
            <p className="text-sm text-muted-foreground">Secure rooms with unique codes</p>
          </div>
        </div>
      </div>

      <CreateRoomModal
        open={createModalOpen}
        onOpenChange={setCreateModalOpen}
        onCreateRoom={handleCreateRoom}
      />
      <JoinRoomModal
        open={joinModalOpen}
        onOpenChange={setJoinModalOpen}
        onJoinRoom={handleJoinRoom}
      />
    </div>
  );
}
