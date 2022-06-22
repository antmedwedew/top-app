import classNames from "classnames";
import React, { HTMLAttributes, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Input, Rating, Textarea } from "..";
import { API } from "../../helpers/api";
import axios from "axios";

import styles from "./ReviewForm.module.css";

import { CloseSmallIcon } from "../../public/icons/CloseSmallIcon";

export interface ReviewFormProps extends HTMLAttributes<HTMLFormElement> {
  productId: string;
  isOpeneed: boolean;
}

export interface IReviewForm {
  name: string;
  title: string;
  description: string;
  rating: number;
}

export interface IReviewSentResponse {
  message: string;
}

export const ReviewForm: React.FC<ReviewFormProps> = ({
  productId,
  isOpeneed,
  className,
  ...props
}) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<IReviewForm>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSentResponse>(
        API.review.createDemo,
        { ...formData, productId }
      );

      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setError("Что-то пошло не так");
      }
    } catch (e) {
      setError("Что-то пошло не так");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classNames(styles.reviewForm, className)}
        {...props}
      >
        <Input
          {...register("name", {
            required: { value: true, message: "Заполните имя" },
          })}
          placeholder="Имя"
          error={errors.name}
          tabIndex={isOpeneed ? 0 : -1}
          aria-invalid={!!errors.name}
        />
        <Input
          {...register("title", {
            required: { value: true, message: "Заполните заголовок" },
          })}
          placeholder="Заголовок отзыва"
          error={errors.title}
          tabIndex={isOpeneed ? 0 : -1}
          aria-invalid={!!errors.title}
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            rules={{ required: { value: true, message: "Укажите рейтинг" } }}
            render={({ field }) => (
              <Rating
                rating={field.value}
                setRating={field.onChange}
                ref={field.ref}
                error={errors.rating}
                isEditable
                tabIndex={isOpeneed ? 0 : -1}
              />
            )}
          />
        </div>
        <Textarea
          {...register("description", {
            required: { value: true, message: "Заполните описание" },
          })}
          placeholder="Текст отзыва"
          className={styles.textarea}
          error={errors.description}
          tabIndex={isOpeneed ? 0 : -1}
          aria-label="Текст отзыва"
          aria-invalid={!!errors.description}
        />
        <div className={styles.submit}>
          <Button
            type="submit"
            className={styles.btnSubmit}
            appearance="primary"
            tabIndex={isOpeneed ? 0 : -1}
            onClick={() => clearErrors()}
          >
            Отправить
          </Button>
          <span>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </form>

      {isSuccess && (
        <div className={styles.success} role="alert">
          <div className={styles.successTitle}>Ваш отзыв Отправлен</div>
          <div className={styles.successText}>
            Спасибо, ваш отзыв будет опубликован после проверки.
          </div>
          <button
            aria-label="Закрыть оповещение"
            className={styles.successClose}
            onClick={() => setIsSuccess(false)}
          >
            <CloseSmallIcon />
          </button>
        </div>
      )}

      {error !== "" && (
        <div className={styles.error} role="alert">
          <div className={styles.errorTitle}>{error}</div>
          <button
            aria-label="Закрыть оповещение"
            className={styles.errorClose}
            onClick={() => setError("")}
          >
            <CloseSmallIcon color="#DE0000" />
          </button>
        </div>
      )}
    </>
  );
};
