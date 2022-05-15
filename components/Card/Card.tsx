import { ReactNode, DetailedHTMLProps, HTMLAttributes, forwardRef, ForwardedRef } from "react";
import classNames from "classnames";
import styles from "./Card.module.css";

interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: 'white' | 'blue',
  children: ReactNode
}

export const Card = forwardRef(({ color = "white", children, className, ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  return (
    <div className={classNames(styles.card, className, {
      [styles.blue]: color === 'blue'
    })}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

