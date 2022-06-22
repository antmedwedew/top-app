import classNames from "classnames";
import styles from "./Tag.module.css";
import React, { HTMLAttributes, ReactNode } from "react";

interface TagProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: "s" | "m";
  mrgnBottom?: boolean;
  color?: "ghost" | "red" | "grey" | "green" | "primary";
  href?: string;
}

export const Tag: React.FC<TagProps> = ({
  size = "s",
  children,
  color = "ghost",
  href,
  mrgnBottom = false,
  className,
  ...props
}) => {
  return (
    <div
      className={classNames(styles.tag, className, {
        [styles.small]: size == "s",
        [styles.middle]: size == "m",
        [styles.mrgnBottom]: mrgnBottom === true,
        [styles.ghost]: color == "ghost",
        [styles.red]: color == "red",
        [styles.grey]: color == "grey",
        [styles.green]: color == "green",
        [styles.primary]: color == "primary",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
