import Auth from '@/components/Auth';
import {Metadata} from 'next';
import {NO_INDEX_PAGE} from '@/constants/seo.constants';

export const metadata: Metadata = {
  title: 'Register',
  ...NO_INDEX_PAGE,
};

const RegisterPage = () => {
  return (
    <Auth type="register" />
  );
};

export default RegisterPage;
