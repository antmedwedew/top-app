import React, { DetailedHTMLProps, ForwardedRef, forwardRef, HTMLAttributes, useRef, useState } from "react";
import Image from 'next/image';
import { Button, Card, Htag, Rating, Tag, P, Review, ReviewForm } from "..";
import { ProductModel } from "../../interfaces/product.interface";
import { decOfNumber, priceRu } from "../../helpers/helpers";
import { motion } from 'framer-motion';

import classNames from 'classnames';
import styles from './Product.module.css';

interface ProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: ProductModel
}

export const Product = motion(forwardRef(({ product, className, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
  const reviewRef = useRef<HTMLDivElement>(null);

  const variants = {
    visible: {
      opacity: 1,
      height: 'auto',
      overflow: 'hidden'
    },

    hidden: {
      opacity: 0,
      height: 0,
      overflow: 'hidden'
    }
  };

  const scrollToReview = () => {
    setIsReviewOpened(true);
    reviewRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
    reviewRef.current?.focus();
  };

  return (
    <div className={className} {...props} ref={ref}>
      <Card className={styles.product}>
        <div className={styles.logo}>
          <Image
            src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
            alt={product.title}
            width={70}
            height={70}
          />
        </div>
        <Htag className={styles.title} tag="h3">{product.title}</Htag>
        <div className={styles.price}>
          <span>
            <span className="visualyHidden">Цена</span>
            {product.price && priceRu(product.price)}
          </span>
          <span>
            <span className="visualyHidden">Скидка</span>
            {product.oldPrice && <Tag className={styles.oldPrice} color="green" size="s">-{product.oldPrice && priceRu(product.oldPrice)}</Tag>}
          </span>
        </div>
        <div className={styles.credit}>{product.credit && priceRu(product.credit)}
          <span>/мес</span>
        </div>
        <div className={styles.rating}>
          <span className="visualyHidden">{'рейтинг' + (product.reviewAvg ?? product.initialRating)}</span>
          <Rating rating={product.reviewAvg ?? product.initialRating} />
        </div>
        <div className={styles.tags}>
          {product.categories.map(categoty =>
            <Tag key={categoty} color="ghost" mrgnBottom={true}>{categoty}</Tag>
          )}
        </div>
        <div className={styles.titlePrice} aria-hidden={true}>цена</div>
        <div className={styles.titleCredit} aria-hidden={true}>в кредит</div>
        <div className={styles.titleRate}>
          <a href="#ref" onClick={scrollToReview}>
            {product.reviewCount} {decOfNumber(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
          </a>
        </div>
        <div className={styles.lineBlock}><hr className={styles.line} /></div>
        <P className={styles.description}>{product.description}</P>
        <div className={styles.feature}>
          {product.characteristics.map((characteristic) => (
            <div className={styles.characteristics} key={characteristic.name}>
              <span className={styles.characteristicName}>{characteristic.name}</span>
              <span className={styles.characteristicDots}></span>
              <span className={styles.characteristicValue}>{characteristic.value}</span>
            </div>
          ))}
        </div>
        {product.advantages || product.disadvantages ?
          <div className={styles.advBlock}>
            {product.advantages && <div className={styles.advantages}>
              <div className={styles.advBlockTitle}>Преимущества</div>
              <P>{product.advantages}</P>
            </div>}
            {product.disadvantages && <div className={styles.disadvantages}>
              <div className={styles.advBlockTitle}>Недостатки</div>
              <P>{product.disadvantages}</P>
            </div>}
          </div> : null
        }
        <div className={classNames(styles.lineBlock, styles.lineBlock2)}><hr className={styles.line} /></div>
        <div className={styles.actions}>
          <Button appearance='primary'>Узнать подробнее</Button>
          <Button
            appearance='ghost'
            arrow={isReviewOpened ? "down" : "right"}
            onClick={() => setIsReviewOpened(!isReviewOpened)}
            aria-expanded={isReviewOpened}
          >Читать отзывы</Button>
        </div>
      </Card>

      <motion.div
        initial="hidden"
        animate={isReviewOpened ? 'visible' : 'hidden'}
        variants={variants}
      >
        <Card
          color="blue"
          className={styles.reviews}
          ref={reviewRef}
          tabIndex={isReviewOpened ? 0 : -1}
        >
          {product.reviews.map((review) => (
            <div key={review._id}>
              <Review review={review} />
              <div className={classNames(styles.lineBlock, styles.lineBlock2)}><hr className={styles.line} /></div>
            </div>
          ))}
          <ReviewForm productId={product._id} isOpeneed={isReviewOpened} />
        </Card>
      </motion.div>
    </div>
  );
}));