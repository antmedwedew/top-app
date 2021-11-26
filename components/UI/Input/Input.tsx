import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from './Input.module.css';
import classNames from 'classnames';

interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
}

export const Input = ({ className, ...props }: InputProps): JSX.Element => {
  return (
    <input
      className={classNames(className, styles.input)}
      {...props}
    />
  );
};