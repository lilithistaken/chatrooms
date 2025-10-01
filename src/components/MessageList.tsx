import MessageItem from "./MessageItem";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useRef } from "react";

interface Message {
  id: string;
  username: string;
  message: string;
  timestamp: Date;
  imageUrl?: string;
  isSystem?: boolean;
  userColor?: string;
}

interface MessageListProps {
  messages: Message[];
}

export default function MessageList({ messages }: MessageListProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <ScrollArea className="flex-1" ref={scrollRef}>
      <div className="p-4 space-y-1" data-testid="message-list">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full min-h-[200px]">
            <p className="text-muted-foreground text-sm">No messages yet. Start the conversation!</p>
          </div>
        ) : (
          messages.map((msg) => (
            <MessageItem key={msg.id} {...msg} />
          ))
        )}
      </div>
    </ScrollArea>
  );
}
