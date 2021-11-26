import React, { DetailedHTMLProps, ThHTMLAttributes } from 'react';
import styles from './Sort.module.css';
import classNames from "classnames";

import { SortIcon } from '../../public/icons/SortIcon';

interface SortProps extends DetailedHTMLProps<ThHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  sort: SortEnum
  setSort: (sort: SortEnum) => void
}

export enum SortEnum {
  Rating,
  Price
}

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
  return (
    <div className={classNames(styles.sort, className)} {...props}>
      <span
        onClick={() => setSort(SortEnum.Rating)}
        className={classNames(styles.sortItem, {
          [styles.active]: sort === SortEnum.Rating
        })}
      >
        <SortIcon />По рейтингу
      </span>

      <span
        onClick={() => setSort(SortEnum.Price)}
        className={classNames(styles.sortItem, {
          [styles.active]: sort === SortEnum.Price
        })}
      >
        <SortIcon />По цене
      </span>
    </div>
  );
};