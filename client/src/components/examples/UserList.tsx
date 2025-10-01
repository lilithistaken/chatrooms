import UserList from '../UserList';

export default function UserListExample() {
  const users = [
    { id: '1', username: 'Alice', isHost: true, userColor: 'hsl(260, 80%, 65%)' },
    { id: '2', username: 'Bob', userColor: 'hsl(142, 70%, 50%)' },
    { id: '3', username: 'Charlie', userColor: 'hsl(38, 90%, 60%)' },
    { id: '4', username: 'Diana', userColor: 'hsl(200, 75%, 55%)' },
    { id: '5', username: 'Eve', userColor: 'hsl(330, 70%, 60%)' },
  ];

  return (
    <div className="h-96">
      <UserList users={users} userCount={5} maxUsers={10} />
    </div>
  );
}
