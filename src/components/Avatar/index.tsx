'use client';
import LazyImage from '@/components/ui/LazyImage';
import {FC} from 'react';
import {IAvatar} from './types';

const Avatar: FC<IAvatar> = ({url, alt}) => {
  return (
    <div className="w-[50px] h-[50px] rounded-full overflow-hidden min-w-[50px]">
      <LazyImage
        src={url || '/no-avatar.jpg'}
        className="w-full h-full object-cover object-center"
        alt={alt || ''}
      />
    </div>
  );
};

export default Avatar;
