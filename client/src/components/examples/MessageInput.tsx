import MessageInput from '../MessageInput';

export default function MessageInputExample() {
  return (
    <div className="w-full max-w-2xl">
      <MessageInput 
        onSendMessage={(msg) => console.log('Sending message:', msg)}
        onSendImage={(file) => console.log('Uploading image:', file.name)}
      />
    </div>
  );
}
