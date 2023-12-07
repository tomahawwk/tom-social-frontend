import {PropsWithChildren} from 'react';
import styles from './styles.module.scss';
import MainProvider from '../MainProvider';

const AuthLayout = ({children}: PropsWithChildren) => {
  return (
    <MainProvider>
      <main className={styles.layout}>{children}</main>
    </MainProvider>
  );
};

export default AuthLayout;
