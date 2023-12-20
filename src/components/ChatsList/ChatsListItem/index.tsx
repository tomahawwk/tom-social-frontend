import {useAuth} from '@/hooks/useAuth';
import {IStrapiChat} from '@/types/chat.types';
import {FC} from 'react';
import Link from 'next/link';
import {DateTime} from 'luxon';
import Avatar from '@/components/Avatar';

interface IChatListItem {
  id: number;
  data: IStrapiChat;
}

const ChatsListItem: FC<IChatListItem> = ({data: chat, id}) => {
  const {user} = useAuth();
  const correspondent = chat.participants.data.find(
    u => u.attributes.email !== user?.email,
  );

  const lastMessage = chat.messages?.data.at(-1);
  return (
    <Link
      href={`/chat/${id}`}
      className="flex items-center px-md duration-300 py-sm gap-sm hover:bg-grey-400">
      <Avatar
        url={correspondent?.attributes?.avatar?.data?.attributes?.url}
        alt={correspondent?.attributes.email}
      />
      <div className="w-full flex justify-between">
        <div className="flex flex-col">
          <span className="font-medium capitalize text-lg">
            {correspondent?.attributes.username}
          </span>
          <span className="text-md text-grey-300">
            {lastMessage?.attributes.text}
          </span>
        </div>
        <div>
          {lastMessage && (
            <span className="text-[13px] text-grey-300">
              {DateTime.fromISO(lastMessage.attributes.createdAt).toRelative({
                style: 'short',
                locale: 'en',
              })}{' '}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ChatsListItem;
