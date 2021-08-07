import classNames from 'classnames';
import styles from './Tag.module.css';
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
  size?: 's' | 'm';
  color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
  href?: string;
}

export const Tag = ({ size = 's', children, color = 'ghost', href, className, ...props }: TagProps): JSX.Element => {
  return (
    <div
      className={classNames(styles.tag, className, {
        [styles.small]: size == 's',
        [styles.middle]: size == 'm',

        [styles.ghost]: color == 'ghost',
        [styles.red]: color == 'red',
        [styles.grey]: color == 'grey',
        [styles.green]: color == 'green',
        [styles.primary]: color == 'primary',
      })}
      {...props}
    >
      {
        href
          ? <a href={href}>{children}</a>
          : <>{children}</>
      }
    </div>
  );
};