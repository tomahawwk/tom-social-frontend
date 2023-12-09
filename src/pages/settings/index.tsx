import BaseLayout from '@/components/layout/BaseLayout';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Settings',
};

const SettingsPage = () => {
  return (
    <BaseLayout>
      <div>Settings</div>
    </BaseLayout>
  );
};

export default SettingsPage;
