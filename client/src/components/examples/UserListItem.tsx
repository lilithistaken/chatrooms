import UserListItem from '../UserListItem';

export default function UserListItemExample() {
  return (
    <div className="space-y-1 p-4 bg-card w-64">
      <UserListItem 
        username="Alice" 
        isHost={true}
        userColor="hsl(260, 80%, 65%)"
      />
      <UserListItem 
        username="Bob"
        userColor="hsl(142, 70%, 50%)"
      />
      <UserListItem 
        username="Charlie"
        userColor="hsl(38, 90%, 60%)"
      />
    </div>
  );
}
