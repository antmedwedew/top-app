import React, { HTMLAttributes } from "react";
import { ReviewModel } from "../../interfaces/product.interface";
import { Rating } from "..";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

import classNames from "classnames";
import styles from "./Review.module.css";

import { UserIcon } from "../../public/icons/UserIcon";

export interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
  review: ReviewModel;
}

export const Review: React.FC<ReviewProps> = ({
  review,
  className,
  ...props
}) => {
  const { name, title, description, createdAt, rating } = review;

  return (
    <div className={classNames(styles.review, className)} {...props}>
      <UserIcon />
      <div className={styles.title}>
        <span className={styles.userName}>{name}:</span>&nbsp;&nbsp;
        <span>{title}</span>
      </div>
      <div className={styles.date}>
        {format(new Date(createdAt), "dd MMMM yyyy", { locale: ru })}
      </div>
      <div className={styles.rating}>
        <Rating rating={rating} />
      </div>
      <p className={classNames(styles.description + " medium")}>
        {description}
      </p>
    </div>
  );
};
