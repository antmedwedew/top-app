import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Sidebar.module.css';
import classNames from "classnames";
import { Menu, Search } from '../../components';

import { Logo } from '../../public/logo';
import Link from 'next/link';

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={classNames(className, styles.sidebar)} {...props}>
      <Link href={'/'} passHref>
        <a>
          <Logo className={styles.logo} />
        </a>
      </Link>
      <Search />
      <Menu />
    </div >
  );
};