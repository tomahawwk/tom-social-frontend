import Auth from '@/components/Auth';
import {Metadata} from 'next';
import {NO_INDEX_PAGE} from '@/constants/seo.constants';
import AuthLayout from '@/components/layout/AuthLayout';

export const metadata: Metadata = {
  title: 'Login',
  ...NO_INDEX_PAGE,
};

const LoginPage = () => {
  return (
    <AuthLayout>
      <Auth type="login" />
    </AuthLayout>
  );
};

export default LoginPage;
