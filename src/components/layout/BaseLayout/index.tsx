import {PropsWithChildren} from 'react';
import Sidebar from './Sidebar';
import styles from './styles.module.scss';
import MainProvider from '../MainProvider';

const BaseLayout = ({children}: PropsWithChildren) => {
  return (
    <MainProvider>
      <main className={styles.layout}>
        <Sidebar />
        <section>{children}</section>
      </main>
    </MainProvider>
  );
};

export default BaseLayout;
