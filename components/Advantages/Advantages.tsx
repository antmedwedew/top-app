import React from "react";
import { TopPageAdvantage } from "../../interfaces/topPage.interface";
import styles from "./Advantages.module.css";

import { CheckRoundIcon } from "../../public/icons/CheckRoundIcon";

interface advantagesProps {
  advantages: TopPageAdvantage[];
}

export const Advantages: React.FC<advantagesProps> = ({ advantages }) => {
  return (
    <>
      {advantages.map((advantage) => (
        <div key={advantage._id} className={styles.advantage}>
          <CheckRoundIcon />
          <div className={styles.title}>{advantage.title}</div>
          <span className={styles.line}></span>
          <p className="larger">{advantage.description}</p>
        </div>
      ))}
    </>
  );
};
