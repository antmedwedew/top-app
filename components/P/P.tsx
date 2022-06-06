import { HTMLAttributes, ReactNode } from "react";
import styles from "./P.module.css";
import classNames from "classnames";

interface PProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: "s" | "m" | "l";
  children: ReactNode;
}

export const P = ({ size = "m", children, className, ...props }: PProps) => {
  return (
    <p
      className={classNames(styles.p, className, {
        [styles.small]: size == "s",
        [styles.medium]: size == "m",
        [styles.larger]: size == "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
