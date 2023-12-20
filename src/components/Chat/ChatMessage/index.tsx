'use client';
import Avatar from '@/components/Avatar';
import {useAuth} from '@/hooks/useAuth';
import {IMessage} from '@/types/chat.types';
import {FC} from 'react';
import {DateTime} from 'luxon';

const ChatMessage: FC<IMessage> = ({sender, createdAt, text}) => {
  const {user} = useAuth();
  const messageData = sender.data.attributes;
  const isSender = user?.email === messageData.email;

  return (
    <div className={`w-full flex gap-sm ${isSender ? 'flex-row-reverse' : ''}`}>
      <Avatar url={messageData.avatar?.data.attributes.url} />
      <div className={`flex flex-col gap-xs ${isSender ? 'items-end' : ''}`}>
        <div className={`flex gap-[7px] ${isSender ? 'flex-row-reverse' : ''}`}>
          <div className="font-medium leading-none">
            {isSender ? 'You' : messageData.username}
          </div>
          <div className="text-grey-300 text-md leading-none">
            {DateTime.fromISO(createdAt).toRelative({
              style: 'short',
              locale: 'en',
            })}{' '}
          </div>
        </div>
        <div
          className={` w-fit px-sm pt-[12px] pb-[10px]
        ${
          isSender
            ? 'rounded-[15px_0px_15px_15px] bg-primary-main'
            : 'rounded-[0px_15px_15px_15px] bg-grey-400'
        }`}>
          {text}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
