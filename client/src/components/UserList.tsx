import UserListItem from "./UserListItem";
import { ScrollArea } from "@/components/ui/scroll-area";

interface User {
  id: string;
  username: string;
  isHost?: boolean;
  userColor?: string;
}

interface UserListProps {
  users: User[];
  userCount: number;
  maxUsers?: number;
}

export default function UserList({ users, userCount, maxUsers = 10 }: UserListProps) {
  return (
    <div className="w-60 border-l bg-card border-card-border flex flex-col">
      <div className="p-4 border-b border-card-border">
        <h3 className="font-semibold text-sm" data-testid="text-user-list-header">
          Online ({userCount}/{maxUsers})
        </h3>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-3 space-y-1">
          {users.map((user) => (
            <UserListItem
              key={user.id}
              username={user.username}
              isHost={user.isHost}
              userColor={user.userColor}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
