import React from 'react';
import style from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={style.statistics__list}>
      <li>
        Good: <span className={style.good}>{good}</span>
      </li>
      <li>
        Neutral: <span className={style.neutral}>{neutral}</span>
      </li>
      <li>
        Bad: <span className={style.bad}>{bad}</span>
      </li>
      <li>
        Total: <span>{total}</span>
      </li>
      <li>
        Positive feedback: <span>{positivePercentage}%</span>
      </li>
    </ul>
  );
};
export default Statistics;
