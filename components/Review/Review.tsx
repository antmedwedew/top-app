import classNames from "classnames";
import { DetailedHTMLProps, ThHTMLAttributes } from "react";
import { ReviewModel } from "../../interfaces/product.interface";
import { Rating } from "..";
import { P } from "..";
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import styles from './Review.module.css';

import { UserIcon } from "../../public/icons/UserIcon";

export interface ReviewProps extends DetailedHTMLProps<ThHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  review: ReviewModel;
}

export const Review = ({ review, className, ...props }: ReviewProps): JSX.Element => {
  const { name, title, description, createdAt, rating } = review;

  return (
    <div
      className={classNames(styles.review, className)}
      {...props}
    >
      <UserIcon />
      <div className={styles.title}>
        <span className={styles.userName}>{name}:</span>&nbsp;&nbsp;
        <span>{title}</span>
      </div>
      <div className={styles.date}>
        {format(new Date(createdAt), 'dd MMMM yyyy', { locale: ru })}
      </div>
      <div className={styles.rating}>
        <Rating rating={rating} />
      </div>
      <P className={styles.description}>{description}</P>
    </div>
  );
};