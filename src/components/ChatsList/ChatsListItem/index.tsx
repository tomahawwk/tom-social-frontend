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
  const correspondent = chat.participants.find(u => u.email !== user?.email);
  const lastMessage = chat.messages.at(-1);

  return (
    <Link href={`/chat/${chat.id}`} className="flex items-center">
      <Image
        src={correspondent?.avatar?.url || '/no-avatar.jpg'}
        width={50}
        height={50}
        alt={correspondent?.email || ''}
      />
      <div className="w-full flex">
        <div>
          <span>{correspondent?.username}</span>
          <span>{lastMessage?.text}</span>
        </div>
        <div>
          <span>{dayjs(lastMessage?.createdAt).format('HH:mm')}</span>
        </div>
      </div>
    </Link>
  );
};

export default ChatsListItem;
