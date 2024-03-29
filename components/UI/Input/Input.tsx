import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";
import classNames from "classnames";
import { FieldError } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
}

export const Input = forwardRef(
  (
    { className, error, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={classNames(className, styles.inputWrapper)}>
        <input
          className={classNames(styles.input, {
            [styles.error]: error,
          })}
          ref={ref}
          {...props}
        />
        {error && (
          <span className={styles.errorText} role="alert">
            {error.message}
          </span>
        )}
      </div>
    );
  }
);
