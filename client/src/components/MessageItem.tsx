import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface MessageItemProps {
  id: string;
  username: string;
  message: string;
  timestamp: Date;
  imageUrl?: string;
  isSystem?: boolean;
  userColor?: string;
}

export default function MessageItem({ 
  username, 
  message, 
  timestamp, 
  imageUrl, 
  isSystem = false,
  userColor = "hsl(260, 80%, 65%)"
}: MessageItemProps) {
  if (isSystem) {
    return (
      <div className="flex justify-center py-2" data-testid="message-system">
        <p className="text-sm text-muted-foreground italic">
          {message}
        </p>
      </div>
    );
  }

  const initials = username.substring(0, 2).toUpperCase();

  return (
    <div className="flex gap-3 p-3 hover-elevate rounded-md" data-testid={`message-${username}`}>
      <Avatar className="h-8 w-8">
        <AvatarFallback style={{ backgroundColor: userColor }} className="text-white text-xs">
          {initials}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span 
            className="font-semibold text-sm"
            style={{ color: userColor }}
            data-testid="text-username"
          >
            {username}
          </span>
          <span className="text-xs text-muted-foreground" data-testid="text-timestamp">
            {format(timestamp, 'h:mm a')}
          </span>
        </div>
        <p className="text-sm text-foreground mt-1 break-words" data-testid="text-message">
          {message}
        </p>
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Shared image"
            className="mt-2 rounded-lg max-w-sm w-full h-auto cursor-pointer hover-elevate"
            data-testid="image-message"
            onClick={() => console.log('Image clicked:', imageUrl)}
          />
        )}
      </div>
    </div>
  );
}
