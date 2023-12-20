'use client';

import ChatField from './ChatField';
import ChatMessage from './ChatMessage';
import {useQuery} from '@tanstack/react-query';
import {FC} from 'react';
import {$fetch} from '@/$api/api.fetch';
import {IChat} from '@/types/chat.types';
import {useAuth} from '@/hooks/useAuth';
import ChatHeader from './ChatHeader';
import ChatHeaderSkeleton from './ChatHeader/ChatHeaderSkeleton';

interface IChatProps {
  id: string;
}

const Chat: FC<IChatProps> = ({id}) => {
  const {user} = useAuth();
  const {data, isLoading} = useQuery({
    queryKey: ['chat', id],
    queryFn: () =>
      $fetch.get<{data: IChat}>(
        `/chats/${id}
				?populate[messages][populate][sender][populate][avatar]=*
				&populate[participants][populate][avatar]=*`,
        true,
      ),
    select: data => data.data,
    enabled: !!id,
  });
  const correspondent = data?.attributes.participants.data.find(
    u => u.attributes.email !== user?.email,
  );

  return (
    <div className="w-full h-full grid grid-rows-[90px_1fr_110px] max-h-screen">
      <div
        className="w-full bg-grey-500 border-border border-b py-md px-lg flex
          items-center gap-sm">
        {isLoading ? (
          <ChatHeaderSkeleton />
        ) : (
          correspondent && <ChatHeader {...correspondent.attributes} />
        )}
      </div>
      <div className="w-full overflow-y-auto">
        <div className="w-full flex flex-col gap-lg p-lg">
          {data?.attributes?.messages?.data.map(message => {
            return <ChatMessage key={message.id} {...message.attributes} />;
          })}
        </div>
      </div>
      <div className="w-full bg-grey-500 border-border border-t py-md px-lg">
        {/* @ts-ignore */}
        <ChatField />
      </div>
    </div>
  );
};

export default Chat;
