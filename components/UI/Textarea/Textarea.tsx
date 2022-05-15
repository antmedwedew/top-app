import { DetailedHTMLProps, forwardRef, ForwardedRef, TextareaHTMLAttributes } from "react";
import styles from './Textarea.module.css';
import classNames from 'classnames';
import { FieldError } from "react-hook-form";

interface TextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  error?: FieldError;
}

export const Textarea = forwardRef(({ className, error, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
  return (
    <div className={classNames(className, styles.textareaWrapper)}>
      <textarea
        className={classNames(styles.textarea, {
          [styles.error]: error
        })}
        ref={ref}
        {...props}
      />
      {error &&
        <span
          className={styles.errorText}
          role="alert"
        >
          {error.message}
        </span>
      }
    </div >
  );
});