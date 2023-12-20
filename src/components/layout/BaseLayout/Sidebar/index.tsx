'use client';

import Image from 'next/image';
import styles from './styles.module.scss';
import Link from 'next/link';
import {MENU} from './data';
import cn from 'clsx';
import {usePathname, useRouter} from 'next/navigation';
import CurrentUser from '@/components/CurrentUser';
import {LucideLogOut, Moon} from 'lucide-react';
import {signOut} from 'next-auth/react';

const Sidebar = () => {
  const pathName = usePathname();
  const {push} = useRouter();

  const handleSignOut = () => {
    signOut({redirect: false}).then(() => {
      window.localStorage.removeItem('token')
      push('/login')
    })
  }
  
  return (
    <aside className={styles.sidebar}>
      <div className="flex flex-col gap-md w-full items-center">
        <div className="bg-grey-400 w-[60px] h-[60px] flex items-center justify-center rounded-full">
          <Image src="/tomahawk.png" priority alt="logo" width={32} height={32} />
        </div>
        <div className={styles.menu}>
          {MENU.map(item => {
            return (
              <Link
                href={item.url}
                key={item.url}
                className={`text-secondary ${cn({
                  [styles.active]: pathName === item.url,
                })}`}>
                <item.icon className="text-secondary" size={22} />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-lg items-center">
        <div className="flex flex-col gap-lg items-center pb-lg w-[60px] border-b border-grey-450">
          <button>
            <Moon className="text-secondary" size={22} />
          </button>
          <button onClick={handleSignOut}>
            <LucideLogOut className="text-secondary" size={22} />
          </button>
        </div>
        <CurrentUser />
      </div>
    </aside>
  );
};

export default Sidebar;
