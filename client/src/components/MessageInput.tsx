import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ImagePlus, Send } from "lucide-react";
import { useState, useRef } from "react";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  onSendImage: (imageFile: File) => void;
}

export default function MessageInput({ onSendMessage, onSendImage }: MessageInputProps) {
  const [message, setMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onSendImage(file);
      e.target.value = '';
    }
  };

  return (
    <div className="border-t bg-card border-card-border p-4">
      <div className="flex gap-2">
        <Textarea
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          className="min-h-[60px] resize-none"
          data-testid="input-message"
        />
        <div className="flex flex-col gap-2">
          <Button
            size="icon"
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
            data-testid="button-upload-image"
          >
            <ImagePlus className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            onClick={handleSend}
            disabled={!message.trim()}
            data-testid="button-send"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageSelect}
        className="hidden"
        data-testid="input-file"
      />
    </div>
  );
}
