import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Footer.module.css';
import classNames from "classnames";

interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Footer: React.FC<FooterProps> = ({ ...props }: FooterProps): JSX.Element => {
  return (
    <div {...props}>
      Footer
    </div>
  );
};