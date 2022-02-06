import { DetailedHTMLProps, ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import styles from './Input.module.css';
import classNames from 'classnames';
import { FieldError } from "react-hook-form";

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: FieldError;
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef(({ className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  return (
    <div className={classNames(className, styles.inputWrapper)}>
      <input className={classNames(styles.input, {
        [styles.error]: error
      })} ref={ref} {...props} />
      {error &&
        <span className={styles.errorText}>
          {error.message}
        </span>
      }
    </div >
  );
});