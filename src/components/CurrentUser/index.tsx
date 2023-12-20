'use client';

import {useAuth} from '@/hooks/useAuth';
import LazyImage from '../ui/LazyImage';
import {useEffect} from 'react';

const CurrentUser = () => {
  const {user} = useAuth();
  useEffect(() => {
    console.log('user', user);
  }, [user]);
  return (
    <div>
      <LazyImage
        src={user?.avatar || '/no-avatar.jpg'}
        alt={user?.username || ''}
        width={40}
        height={40}
        className="rounded-sm"
      />
    </div>
  );
};

export default CurrentUser;
