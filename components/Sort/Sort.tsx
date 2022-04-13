import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Sort.module.css';
import classNames from "classnames";

import { SortIcon } from '../../public/icons/SortIcon';

interface SortProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
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
      <div className={styles.sortName} id="sort">Сортировка</div>
      <button
        id='rating'
        onClick={() => setSort(SortEnum.Rating)}
        className={classNames(styles.sortItem, {
          [styles.active]: sort === SortEnum.Rating
        })}
        role="sort"
        aria-selected={sort == SortEnum.Rating}
        aria-labelledby="sort rating"
      >
        <SortIcon />По рейтингу
      </button>

      <button
        id='price'
        onClick={() => setSort(SortEnum.Price)}
        className={classNames(styles.sortItem, {
          [styles.active]: sort === SortEnum.Price
        })}
        role="sort"
        aria-selected={sort == SortEnum.Price}
        aria-labelledby="sort price"
      >
        <SortIcon />По цене
      </button>
    </div>
  );
};