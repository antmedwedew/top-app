import React from "react";
import { Card } from "..";
import { priceRu } from "../../helpers/helpers";
import { HhData } from "../../interfaces/topPage.interface";

import { RoundStarIcon } from "../../public/icons/RoundStarIcon";

import styles from "./HhData.module.css";

export const HhDataBlock = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
}: HhData): JSX.Element => {
  return (
    <div className={styles.hh}>
      <Card className={styles.hhCard}>
        <div className={styles.hhCardTitle}>Всего вакансий</div>
        <div className={styles.hhCardCount}>{count}</div>
      </Card>
      <Card className={styles.salary}>
        <div className={styles.salaryBlock}>
          <div className={styles.salaryTitle}>Начальный</div>
          <div className={styles.salaryValue}>
            {juniorSalary && priceRu(juniorSalary)}
          </div>
          <div className={styles.salaryRating}>
            <RoundStarIcon color="#FC836D" />
            <RoundStarIcon />
            <RoundStarIcon />
          </div>
        </div>

        <div className={styles.salaryBlock}>
          <div className={styles.salaryTitle}>Средний</div>
          <div className={styles.salaryValue}>
            {middleSalary && priceRu(middleSalary)}
          </div>
          <div className={styles.salaryRating}>
            <RoundStarIcon color="#FC836D" />
            <RoundStarIcon color="#FC836D" />
            <RoundStarIcon />
          </div>
        </div>

        <div className={styles.salaryBlock}>
          <div className={styles.salaryTitle}>Профессионал</div>
          <div className={styles.salaryValue}>
            {seniorSalary && priceRu(seniorSalary)}
          </div>
          <div className={styles.salaryRating}>
            <RoundStarIcon color="#FC836D" />
            <RoundStarIcon color="#FC836D" />
            <RoundStarIcon color="#FC836D" />
          </div>
        </div>
      </Card>
    </div>
  );
};
