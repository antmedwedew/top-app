import {
  HTMLAttributes,
  useEffect,
  useState,
  KeyboardEvent,
  forwardRef,
  ForwardedRef,
  useRef,
} from "react";
import styles from "./Rating.module.css";
import classNames from "classnames";
import { StarIcon } from "../../public/icons/StarIcon";
import { FieldError } from "react-hook-form";

interface RatingProps extends HTMLAttributes<HTMLDivElement> {
  isEditable?: boolean;
  rating: number;
  error?: FieldError;
  setRating?: (rating: number) => void;
}

export const Rating = forwardRef(
  (
    {
      isEditable = false,
      error,
      rating,
      setRating,
      tabIndex,
      ...props
    }: RatingProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
      new Array(5).fill(<></>)
    );
    const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
      constructRating(rating);
    }, [rating, tabIndex]);

    const changeDisplay = (i: number) => {
      if (!isEditable) {
        return;
      }
      constructRating(i);
    };

    const onClick = (i: number) => {
      if (!isEditable || !setRating) {
        return;
      }
      setRating(i);
    };

    const handleKey = (e: KeyboardEvent) => {
      if (!isEditable || !setRating) {
        return;
      }

      if (e.code == "ArrowRight" || e.code == "ArrowUp") {
        if (!rating) {
          setRating(1);
        } else {
          e.preventDefault();
          setRating(rating < 5 ? rating + 1 : 5);
        }
        ratingArrayRef.current[rating]?.focus();
      }

      if (e.code == "ArrowLeft" || e.code == "ArrowDown") {
        e.preventDefault();
        setRating(rating > 1 ? rating - 1 : 1);
        ratingArrayRef.current[rating - 2]?.focus();
      }
    };

    const computeFocus = (r: number, i: number): number => {
      if (!isEditable) {
        return -1;
      }

      if ((!rating && i == 0) || r == i + 1) {
        return tabIndex ?? 0;
      }

      return -1;
    };

    const constructRating = (currentRating: number) => {
      const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
        return (
          <span
            key={i}
            onMouseEnter={() => changeDisplay(i + 1)}
            onMouseLeave={() => changeDisplay(rating)}
            onClick={() => onClick(i + 1)}
            onKeyDown={handleKey}
            tabIndex={computeFocus(rating, i)}
            ref={(r) => ratingArrayRef.current?.push(r)}
            role={isEditable ? "slider" : ""}
            aria-label={isEditable ? "укажите рейтинг" : "рейтинг" + rating}
            aria-valuenow={rating}
            aria-valuemax={5}
            aria-valuemin={1}
            aria-invalid={error ? true : false}
          >
            <StarIcon
              className={classNames(styles.star, {
                [styles.filled]: i < currentRating,
                [styles.editable]: isEditable,
              })}
            />
          </span>
        );
      });
      setRatingArray(updatedArray);
    };

    return (
      <div
        ref={ref}
        role={error ? "alert" : ""}
        {...props}
        className={classNames({
          [styles.error]: error,
        })}
      >
        {ratingArray.map((r: JSX.Element, i: number) => (
          <span key={i}>{r}</span>
        ))}
      </div>
    );
  }
);
