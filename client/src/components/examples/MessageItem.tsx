import MessageItem from '../MessageItem';

export default function MessageItemExample() {
  return (
    <div className="space-y-2 p-4 bg-background">
      <MessageItem 
        id="1"
        username="Alice"
        message="Hey everyone! Welcome to the chat room!"
        timestamp={new Date(Date.now() - 300000)}
        userColor="hsl(260, 80%, 65%)"
      />
      <MessageItem 
        id="2"
        username="Bob"
        message="Thanks! This is awesome. Check out this cool image I found:"
        timestamp={new Date(Date.now() - 120000)}
        imageUrl="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400"
        userColor="hsl(142, 70%, 50%)"
      />
      <MessageItem 
        id="3"
        username="System"
        message="Charlie joined the room"
        timestamp={new Date()}
        isSystem={true}
      />
    </div>
  );
}
