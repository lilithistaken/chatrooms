import { Button } from "@/components/ui/button";
import { Copy, LogOut, Users, Check } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface RoomHeaderProps {
  roomCode: string;
  userCount: number;
  maxUsers?: number;
  onLeave: () => void;
}

export default function RoomHeader({ roomCode, userCount, maxUsers = 10, onLeave }: RoomHeaderProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(roomCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isNearlyFull = userCount >= 8;

  return (
    <header className="border-b bg-card border-card-border p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <code 
              className="text-lg font-mono font-bold text-primary tracking-wider"
              data-testid="text-room-code"
            >
              {roomCode}
            </code>
            <Button
              size="icon"
              variant="ghost"
              onClick={handleCopyCode}
              data-testid="button-copy-room-code"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
          <Badge 
            variant={isNearlyFull ? "destructive" : "secondary"}
            className="flex items-center gap-1"
            data-testid="badge-user-count"
          >
            <Users className="h-3 w-3" />
            <span>{userCount}/{maxUsers}</span>
          </Badge>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={onLeave}
          data-testid="button-leave-room"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Leave
        </Button>
      </div>
    </header>
  );
}
