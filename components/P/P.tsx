import styles from './P.module.css';
import classNames from "classnames";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: React.ReactNode;
  size?: 's' | 'm' | 'l';
}

export const P = ({ size = 'm', children, className, ...props }: PProps): JSX.Element => {
  return (
    <p
      className={classNames(styles.button, className, {
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