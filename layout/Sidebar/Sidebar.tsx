import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Sidebar.module.css';
import classNames from "classnames";
import { Menu } from '../../components';

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={classNames(className, styles.sidebar)} {...props}>
      <Menu />
    </div>
  );
};