import { ButtonHTMLAttributes, forwardRef, ForwardedRef } from "react";
import styles from "./ButtonIcon.module.css";
import classNames from "classnames";

import { ArrowTopIcon } from "../../../public/icons/ArrowTopIcon";
import { BurgerIcon } from "../../../public/icons/BurgerIcon";
import { CloseIcon } from "../../../public/icons/CloseIcon";
import { SearchIcon } from "../../../public/icons/SearchIcon";

const icons = {
  ArrowTopIcon,
  BurgerIcon,
  CloseIcon,
  SearchIcon,
};

type IconName = keyof typeof icons;

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName;
  appearance: "primary" | "white";
}

export const ButtonIcon = forwardRef(
  (
    { appearance, className, icon, ...props }: ButtonIconProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const IconComp = icons[icon];
    return (
      <button
        ref={ref}
        className={classNames(styles.button, className, {
          [styles.primary]: appearance == "primary",
          [styles.white]: appearance == "white",
        })}
        {...props}
      >
        <IconComp />
      </button>
    );
  }
);
