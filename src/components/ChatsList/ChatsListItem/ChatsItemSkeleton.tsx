import Skeleton from 'react-loading-skeleton';

const ChatsItemSkeleton = () => {
  return (
    <div className="skeleton skeleton-card">
      <Skeleton count={3} />
    </div>
  );
};

export default ChatsItemSkeleton;
