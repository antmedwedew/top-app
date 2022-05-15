import React, { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef, ForwardedRef } from "react";
import styles from './Button.module.css';
import classNames from "classnames";
import { ArrowIcon } from '../../../public/icons/ArrowIcon';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode;
  appearance: 'primary' | 'ghost';
  arrow?: 'right' | 'down' | 'none';
}

export const Button = forwardRef(({ appearance, arrow = 'none', className, children, ...props }: ButtonProps, ref: ForwardedRef<HTMLButtonElement>): JSX.Element => {
  return (
    <button
      ref={ref}
      className={classNames(styles.button, className, {
        [styles.primary]: appearance == 'primary',
        [styles.ghost]: appearance == 'ghost'
      })}
      {...props}
    >
      {children}
      {arrow != 'none' && <span className={classNames(styles.arrow, {
        [styles.down]: arrow == 'down'
      })}>
        <ArrowIcon />
      </span>}
    </button >
  );
});