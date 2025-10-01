import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Crown } from "lucide-react";

interface UserListItemProps {
  username: string;
  isHost?: boolean;
  userColor?: string;
}

export default function UserListItem({ username, isHost = false, userColor = "hsl(260, 80%, 65%)" }: UserListItemProps) {
  const initials = username.substring(0, 2).toUpperCase();

  return (
    <div 
      className="flex items-center gap-3 p-2 rounded-md hover-elevate"
      data-testid={`user-${username}`}
    >
      <Avatar className="h-8 w-8">
        <AvatarFallback style={{ backgroundColor: userColor }} className="text-white text-xs">
          {initials}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span 
            className="text-sm font-medium truncate"
            data-testid="text-username"
          >
            {username}
          </span>
          {isHost && (
            <Crown className="h-3 w-3 text-primary shrink-0" data-testid="icon-host" />
          )}
        </div>
      </div>
      <div className="w-2 h-2 rounded-full bg-chart-2 shrink-0" data-testid="indicator-online" />
    </div>
  );
}
