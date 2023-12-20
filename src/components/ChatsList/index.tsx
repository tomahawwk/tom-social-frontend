'use client';

import {Search} from 'lucide-react';
import Field from '@/components/ui/Field';
import {useQuery} from '@tanstack/react-query';
import {$fetch} from '@/$api/api.fetch';
import {IChat} from '@/types/chat.types';
import ChatsListItem from './ChatsListItem';
import {useState} from 'react';
import {useAuth} from '@/hooks/useAuth';
import {useDebounce} from '@/hooks/useDebounce';
import ChatsItemSkeleton from './ChatsListItem/ChatsItemSkeleton';

const ChatsList = () => {
  const {user, isLoggedIn} = useAuth();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedSearchTerm = useDebounce(searchTerm);
  const skeletonCards = [];
  const {data, isLoading, isFetching} = useQuery({
    queryKey: ['chats', debouncedSearchTerm],
    queryFn: () =>
      $fetch.get<{data: IChat[]}>(
        `/chats?sort=createdAt:desc
				&populate[messages]=*
				&populate[participants][populate][avatar]=*
				&filters[participants][email][$eq]=${user?.email}
				&filters[$or][0][participants][username][$contains]=${debouncedSearchTerm}
				&filters[$or][1][messages][text][$contains]=${debouncedSearchTerm}
				`,
        true,
      ),
    enabled: isLoggedIn,
  });

  for (let i = 1; i <= 5; i++) {
    skeletonCards.push(<ChatsItemSkeleton key={i} />);
  }

  return (
    <div className="flex flex-col gap-md">
      <div className="px-md">
        <Field
          placeholder="Search..."
          Icon={Search}
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        {isLoading || isFetching ? (
          <div className="pt-[16px] px-md flex flex-col gap-[32px]">{skeletonCards}</div>
        ) : (
          data?.data.map(chat => {
            return (
              <ChatsListItem
                key={chat.id}
                data={chat.attributes}
                id={chat.id}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default ChatsList;
