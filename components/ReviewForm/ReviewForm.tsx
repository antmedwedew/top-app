import classNames from "classnames";
import { DetailedHTMLProps, ThHTMLAttributes } from "react";
import { Button, Input, Rating, Textarea } from "..";

import styles from './ReviewForm.module.css';

import { CloseSmallIcon } from "../../public/icons/CloseSmallIcon";


export interface ReviewFormProps extends DetailedHTMLProps<ThHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  productId: string
}

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
  return (
    <>
      <div
        className={classNames(styles.reviewForm, className)}
        {...props}
      >
        <Input placeholder="Имя" />
        <Input placeholder="Заголовок отзыва" />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Rating rating={0} isEditable={true} />
        </div>
        <Textarea placeholder="Текст отзыва" className={styles.textarea} />
        <div className={styles.submit}>
          <Button className={styles.btnSubmit} appearance="primary">Отправить</Button>
          <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successTitle}>Ваш отзыв Отправлен</div>
        <div className={styles.successText}>Спасибо, ваш отзыв будет опубликован после проверки.</div>
        <button className={styles.successClose}>
          <CloseSmallIcon />
        </button>
      </div>
    </>
  );
};