import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from './P.module.css';
import classNames from "classnames";

interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: React.ReactNode;
  size?: 's' | 'm' | 'l';
}

export const P = ({ size = 'm', children, className, ...props }: PProps): JSX.Element => {
  return (
    <p
      className={classNames(styles.p, className, {
        [styles.small]: size == 's',
        [styles.medium]: size == 'm',
        [styles.larger]: size == 'l'
      })}
      {...props}
    >
      {children}
    </p>
  );
};