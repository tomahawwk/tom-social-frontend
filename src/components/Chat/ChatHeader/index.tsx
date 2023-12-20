import {FC} from 'react';
import {IUser} from '@/types/user.types';
import Avatar from '@/components/Avatar';

const ChatHeader: FC<IUser> = ({username, avatar}) => {
  return (
    <>
      <Avatar url={avatar?.data?.attributes.url} />
      <div className="font-medium text-[20px]">{username}</div>
    </>
  );
};

export default ChatHeader;
