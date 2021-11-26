import React from "react";
import { TopPageAdvantage } from "../../interfaces/topPage.interface";
import styles from './Advantages.module.css';

import { CheckRoundIcon } from "../../public/icons/CheckRoundIcon";
import { P } from "../P/P";

interface advantagesProps {
  advantages: TopPageAdvantage[]
}

export const Advantages = ({ advantages }: advantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map(advantage => (
        <div key={advantage._id} className={styles.advantage}>
          <CheckRoundIcon />
          <div className={styles.title}>{advantage.title}</div>
          <span className={styles.line}></span>
          <P size='l'>{advantage.description}</P>
        </div>
      ))}
    </>
  );
};