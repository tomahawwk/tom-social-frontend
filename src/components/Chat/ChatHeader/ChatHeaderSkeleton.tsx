import Skeleton from 'react-loading-skeleton';

const ChatHeaderSkeleton = () => {
  return (
    <div className="skeleton skeleton-chat-head">
      <Skeleton count={2} />
    </div>
  );
};

export default ChatHeaderSkeleton;
