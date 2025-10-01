import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface CreateRoomModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreateRoom: (roomCode: string) => void;
}

export default function CreateRoomModal({ open, onOpenChange, onCreateRoom }: CreateRoomModalProps) {
  const [roomCode, setRoomCode] = useState("");
  const [copied, setCopied] = useState(false);

  const generateCode = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setRoomCode(code);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(roomCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCreate = () => {
    if (roomCode) {
      onCreateRoom(roomCode);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md" data-testid="modal-create-room">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">Create Room</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Generate a unique room code and share it with others to start chatting
            </p>
            {!roomCode ? (
              <Button 
                onClick={generateCode} 
                className="w-full" 
                size="lg"
                data-testid="button-generate-code"
              >
                Generate Room Code
              </Button>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-4 bg-card border border-card-border rounded-lg">
                  <code className="flex-1 text-2xl font-mono font-bold text-center tracking-wider text-primary">
                    {roomCode}
                  </code>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={handleCopyCode}
                    data-testid="button-copy-code"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={generateCode}
                    className="flex-1"
                    data-testid="button-regenerate"
                  >
                    Regenerate
                  </Button>
                  <Button
                    onClick={handleCreate}
                    className="flex-1"
                    data-testid="button-create-enter"
                  >
                    Create & Enter
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
