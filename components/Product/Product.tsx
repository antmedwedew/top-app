import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import Image from 'next/image';
import { Button, Card, Htag, Rating, Tag, P } from "..";
import { ProductModel } from "../../interfaces/product.interface";
import styles from './Product.module.css';
import classNames from 'classnames';
import { decOfNumber, priceRu } from "../../helpers/helpers";

interface ProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: ProductModel
}

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
  return (
    <Card className={classNames(className, styles.product)}>
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
        {priceRu(product.price)}
        {product.oldPrice && <Tag className={styles.oldPrice} color="green" size="s">-{priceRu(product.oldPrice)}</Tag>}
      </div>
      <div className={styles.credit}>{priceRu(product.credit)}
        <span>/мес</span>
      </div>
      <div className={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>
      <div className={styles.tags}>
        {product.categories.map(categoty =>
          <Tag key={categoty} color="ghost" mrgnBottom={true}>{categoty}</Tag>
        )}
      </div>
      <div className={styles.titlePrice}>цена</div>
      <div className={styles.titleCredit}>в кредит</div>
      <div className={styles.titleRate}>{product.reviewCount} {decOfNumber(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</div>
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
      <div className={styles.advBlock}>
        {product.advantages && <div className={styles.advantages}>
          <div className={styles.advBlockTitle}>Преимущества</div>
          <P>{product.advantages}</P>
        </div>}
        {product.disadvantages && <div className={styles.disadvantages}>
          <div className={styles.advBlockTitle}>Недостатки</div>
          <P>{product.disadvantages}</P>
        </div>}
      </div>
      <div className={styles.lineBlock}><hr className={styles.line} /></div>
      <div className={styles.actions}>
        <Button appearance='primary'>Узнать подробнее</Button>
        <Button appearance='ghost' arrow="right">Читать отзывы</Button>
      </div>
    </Card>
  );
};