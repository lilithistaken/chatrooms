import MessageList from '../MessageList';

export default function MessageListExample() {
  const messages = [
    {
      id: '1',
      username: 'Alice',
      message: 'Hey everyone! Welcome to the chat!',
      timestamp: new Date(Date.now() - 600000),
      userColor: 'hsl(260, 80%, 65%)'
    },
    {
      id: '2',
      username: 'Bob',
      message: 'Thanks Alice! This chat room is really cool.',
      timestamp: new Date(Date.now() - 480000),
      userColor: 'hsl(142, 70%, 50%)'
    },
    {
      id: '3',
      username: 'System',
      message: 'Charlie joined the room',
      timestamp: new Date(Date.now() - 360000),
      isSystem: true
    },
    {
      id: '4',
      username: 'Charlie',
      message: 'Hi everyone!',
      timestamp: new Date(Date.now() - 240000),
      userColor: 'hsl(38, 90%, 60%)'
    },
  ];

  return (
    <div className="h-96 border rounded-lg">
      <MessageList messages={messages} />
    </div>
  );
}
