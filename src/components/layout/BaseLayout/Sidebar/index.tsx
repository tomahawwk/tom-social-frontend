'use client';

import Image from 'next/image';
import styles from './styles.module.scss';
import Link from 'next/link';
import {MENU} from './data';
import cn from 'clsx';
import {usePathname} from 'next/navigation';
import CurrentUser from '@/components/CurrentUser';

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <aside className={styles.sidebar}>
      <Image src="/logo.svg" priority alt="logo" width={60} height={60} />
      <div className={styles.menu}>
        {MENU.map(item => {
          return (
            <Link
              href={item.url}
              key={item.url}
              className={`text-secondary ${cn({
                [styles.active]: pathName === item.url,
              })}`}>
              <item.icon className="text-secondary" size={25} />
            </Link>
          );
        })}
      </div>
      <CurrentUser />
    </aside>
  );
};

export default Sidebar;
