'use client';

import Field from '@/components/ui/Field';
import {Send} from 'lucide-react';
import {IChatField} from '../types';
import {FC, useState} from 'react';
import {useReactQuerySubscription} from '@/hooks/useReactQuerySubscribtion';
import {useParams} from 'next/navigation';
import {useMutation} from '@tanstack/react-query';
import {$fetch} from '@/$api/api.fetch';
import {useAuth} from '@/hooks/useAuth';

const ChatField: FC<IChatField> = () => {
  const [message, setMessage] = useState<string>('');
  const send = useReactQuerySubscription();
  const params = useParams();
  const {user} = useAuth();

  const {mutate} = useMutation({
    mutationKey: ['update chat', params?.id],
    mutationFn: () =>
      $fetch.post(
        '/messages',
        {
          data: {
            text: message,
            sender: Number(user?.id),
            chat: params?.id,
          },
        },
        true,
      ),
    onSuccess() {
      setMessage('');
      send({
        operation: 'update',
        entity: 'chat',
        id: params.id.toString(),
      });
    },
  });

  const onSubmit = () => {
		if (!message) return
		mutate()
	}

  return (
    <div className="w-full relative">
      <Field
        placeholder="Your messages..."
        className="h-full"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button
        className="absolute top-0 bottom-0 m-auto right-sm"
        onClick={onSubmit}
        disabled={!message}>
        <Send className="text-primary-main" size={24} />
      </button>
    </div>
  );
};

export default ChatField;
