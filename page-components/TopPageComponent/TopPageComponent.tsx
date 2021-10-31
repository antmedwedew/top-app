import React from "react";
import { Card, Htag, Tag } from "../../components";
import { ProductModel } from "../../interfaces/product.interface";
import { TopLevelCategory, TopPageModel } from "../../interfaces/topPage.interface";

import styles from "./TopPageComponent.module.css";
import { RoundStarIcon } from '../../public/icons/RoundStarIcon';

interface TopPageComponentProps {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && <Tag color="grey" size="m">{products.length}</Tag>}
        <span>Сортировка</span>
      </div>

      <div>
        {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
      </div>

      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        {products && <Tag color="red" size="m">hh.ru</Tag>}
      </div>

      {
        firstCategory === TopLevelCategory.Courses &&
        <div className={styles.hh}>
          <Card className={styles.hhCard}>
            <div className={styles.hhCardTitle}>Всего вакансий</div>
            <div className={styles.hhCardCount}>{page.hh?.count}</div>
          </Card>
          <Card className={styles.salary}>
            <div className={styles.salaryBlock}>
              <div className={styles.salaryTitle}>Начальный</div>
              <div className={styles.salaryValue}>{page.hh?.juniorSalary}</div>
              <div className={styles.salaryRating}>
                <RoundStarIcon color="#FC836D" />
                <RoundStarIcon />
                <RoundStarIcon />
              </div>
            </div>

            <div className={styles.salaryBlock}>
              <div className={styles.salaryTitle}>Средний</div>
              <div className={styles.salaryValue}>{page.hh?.middleSalary}</div>
              <div className={styles.salaryRating}>
                <RoundStarIcon color="#FC836D" />
                <RoundStarIcon color="#FC836D" />
                <RoundStarIcon />
              </div>
            </div>

            <div className={styles.salaryBlock}>
              <div className={styles.salaryTitle}>Профессионал</div>
              <div className={styles.salaryValue}>{page.hh?.seniorSalary}</div>
              <div className={styles.salaryRating}>
                <RoundStarIcon color="#FC836D" />
                <RoundStarIcon color="#FC836D" />
                <RoundStarIcon color="#FC836D" />
              </div>
            </div>
          </Card>
        </div>
      }
    </div>
  );
};