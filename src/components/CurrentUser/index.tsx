'use client';

import {useAuth} from '@/hooks/useAuth';
import {useEffect} from 'react';
import Image from 'next/image';

const CurrentUser = () => {
  const {user, isLoggedIn} = useAuth();

  return (
    <div>
    <p> {isLoggedIn ? "y" : "n"}</p>
    <Image
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
