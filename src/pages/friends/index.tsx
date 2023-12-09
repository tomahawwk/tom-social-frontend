import BaseLayout from '@/components/layout/BaseLayout';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Friends',
};

const FriendsPage = () => {
  return (
    <BaseLayout>
      <div>Friends</div>
    </BaseLayout>
  );
};

export default FriendsPage;
