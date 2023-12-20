import Chat from '@/components/Chat';
import ChatsScreen from '@/components/screens/ChatsScreen';
import {useParams} from 'next/navigation';

const ChatPage = () => {
  const params = useParams();
  return (
    <ChatsScreen>
      <Chat id={params?.id?.toString()} />
    </ChatsScreen>
  );
};

export default ChatPage;
