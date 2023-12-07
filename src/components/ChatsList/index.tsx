'use client'

import {Search} from 'lucide-react';
import Field from '@/components/ui/Field';
import {useQuery} from '@tanstack/react-query';
import {$fetch} from '@/$api/api.fetch';
import {IChat} from '@/types/chat.types';
import {Loader} from '../ui/Loader';
import ChatsListItem from './ChatsListItem';
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useDebounce } from '@/hooks/useDebounce';

const ChatsList = () => {
  const { user, isLoggedIn } = useAuth();
  const [searchTerm, setSearchTerm] = useState<string>('')
	const debouncedSearchTerm = useDebounce(searchTerm)
  const {data, isLoading, isFetching} = useQuery({
    queryKey: ['chats'],
    queryFn: () => $fetch.get<{ data: IChat[] }>(`/chats?sort=createdAt:desc
    &populate[messages]=*
    &populate[participants][populate][avatar]=*
    &filters[participants][email][$contains]=${user?.email}
    &filters[$or][0][participants][username][$contains]=${debouncedSearchTerm}
    &filters[$or][1][messages][text][$contains]=${debouncedSearchTerm}`, true),
    enabled: isLoggedIn
  });

  useEffect(() => {
    console.log("data")
    console.log(debouncedSearchTerm)
  }, [debouncedSearchTerm])
  
  return (
    <div>
      <Field placeholder='Search chats'
					Icon={Search}
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)} />
      <div>
				{isLoading || isFetching ? (
					<div className='p-layout'>
						<Loader />
					</div>
				) : (
					data?.data?.map(chat => {
						return <ChatsListItem key={chat.id} chat={chat} />
					})
				)}
			</div>
    </div>
  );
};

export default ChatsList;
