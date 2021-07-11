import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Header.module.css';
import classNames from "classnames";

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <div className={classNames(className, styles.header)} {...props}>
      Header
    </div>
  );
};