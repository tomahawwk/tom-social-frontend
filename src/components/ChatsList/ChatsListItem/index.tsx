import {useAuth} from '@/hooks/useAuth';
import {IChat} from '@/types/chat.types';
import {FC} from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';
import Link from 'next/link';

interface IChatListItem {
  chat: IChat;
}

const ChatsListItem: FC<IChatListItem> = ({chat}) => {
  const {user} = useAuth();
  console.log(chat)
  const correspondent = chat.attributes.participants.data.find(u => u.attributes.email !== user?.email);
  
  const lastMessage = chat.attributes.messages?.data.at(-1);
  console.log("correspondent", correspondent)
  return (
    <Link href={`/chat/${chat.id}`} className="flex items-center">
      <Image
        src={correspondent?.attributes.avatar?.url || '/no-avatar.jpg'}
        width={50}
        height={50}
        alt={correspondent?.attributes.email || ''}
      />
      <div className="w-full flex">
        <div>
          <span>{correspondent?.attributes.username}</span>
          <span>{lastMessage?.attributes.text}</span>
        </div>
        <div>
          <span>{dayjs(lastMessage?.attributes.createdAt).format('HH:mm')}</span>
        </div>
      </div>
    </Link>
  );
};

export default ChatsListItem;
