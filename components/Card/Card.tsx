import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./Card.module.css";

interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: 'white' | 'blue',
  children: ReactNode
}

export const Card = ({ color = "white", children, className, ...props }: CardProps): JSX.Element => {
  return (
    <div className={classNames(styles.card, className, {
      [styles.blue]: color === 'blue'
    })}
      {...props}
    >
      {children}
    </div>
  );
};

