import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from './ButtonIcon.module.css';
import classNames from "classnames";

import { ArrowTopIcon } from '../../../public/icons/ArrowTopIcon';
import { BurgerIcon } from '../../../public/icons/BurgerIcon';
import { CloseIcon } from '../../../public/icons/CloseIcon';
import { SearchIcon } from '../../../public/icons/SearchIcon';

const icons = {
  ArrowTopIcon,
  BurgerIcon,
  CloseIcon,
  SearchIcon
};

type IconName = keyof typeof icons;

interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  icon: IconName;
  appearance: 'primary' | 'white';
}

export const ButtonIcon = ({ appearance, className, icon, ...props }: ButtonIconProps): JSX.Element => {
  const IconComp = icons[icon];
  return (
    <button
      className={classNames(styles.button, className, {
        [styles.primary]: appearance == 'primary',
        [styles.white]: appearance == 'white'
      })}
      {...props}
    >
      <IconComp />
    </button >
  );
};