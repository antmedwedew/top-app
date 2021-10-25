import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Sidebar.module.css';
import classNames from "classnames";
import { Menu } from '../../components';

import {Logo} from '../../public/logo';

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={classNames(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo}/>
      <div>поиск</div>
      <Menu />
    </div>
  );
};