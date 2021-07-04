import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Header.module.css';
import classNames from "classnames";

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Header: React.FC<HeaderProps> = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <div {...props}>
      Header
    </div>
  );
};