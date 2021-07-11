import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Footer.module.css';
import classNames from "classnames";
import { format } from 'date-fns';

interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={classNames(className, styles.footer)} {...props}>
      <div>OwlTop © 2020 - {format(new Date, 'yyyy')} Все права защищены</div>
      <a href="#" target="_blank">Пользовательское соглашение</a>
      <a href="#" target="_blank">Политика конфиденциальности</a>
    </footer>
  );
};