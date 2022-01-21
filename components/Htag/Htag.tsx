import React from "react";
import classNames from "classnames";
import styles from './Htag.module.css';

interface HtagProps {
  tag: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
  className?: string
}

export const Htag = ({ tag, children, className, ...props }: HtagProps): JSX.Element => {
  switch (tag) {
    case 'h1':
      return <h1 className={classNames(styles.h1, className)} {...props}>{children}</h1>;
    case 'h2':
      return <h2 className={classNames(styles.h2, className)} {...props}>{children}</h2>;
    case 'h3':
      return <h3 className={classNames(styles.h3, className)} {...props}>{children}</h3>;
    default:
      return <></>;
  }
};