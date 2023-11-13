import React from 'react';
import { FaFaceLaugh, FaFaceMeh, FaFaceFrown } from 'react-icons/fa6';
import style from './FeedbackOptions.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const iconMap = {
  Good: <FaFaceLaugh />,
  Neutral: <FaFaceMeh />,
  Bad: <FaFaceFrown />,
};
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={style.button__wrapper}>
    {options.map(option => {
      const buttonClass = cx('button', `button__${option.toLowerCase()}`);
      return (
        <button
          key={option}
          type="button"
          name={option.toLowerCase()}
          onClick={onLeaveFeedback}
          className={buttonClass}
        >
          {iconMap[option]}
          {option}
        </button>
      );
    })}
  </div>
);

export default FeedbackOptions;
