import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import styles from './Textarea.module.css';
import classNames from 'classnames';

interface TextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
}

export const Textarea = ({ className, ...props }: TextareaProps): JSX.Element => {
  return (
    <textarea
      className={classNames(className, styles.Textarea)}
      {...props}
    />
  );
};