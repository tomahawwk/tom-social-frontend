import ChatsList from '@/components/ChatsList';
import {FC, PropsWithChildren} from 'react';
import {PenSquare} from 'lucide-react';

const ChatsScreen: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="grid grid-cols-[375px_1fr] h-full">
      <div className="bg-grey-500 border-r border-border py-lg flex flex-col gap-md">
        <div className="px-md">
          <div className="flex justify-between items-center">
            <div className="leading-0 text-[32px] font-bold">Messages</div>
            <PenSquare className="text-primary-main" size={24} />
          </div>
        </div>
        <ChatsList />
      </div>
      <div>
        {children ? (
          children
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-center">
            <p>Welcome to <span className="text-primary-main">Tomahawk Messenger</span></p>
            <p>Choose who you would like to write to</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatsScreen;
