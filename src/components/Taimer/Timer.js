import React from 'react';
import {useTimer} from 'react-timer-hook';
import './Timer.scss'
const Timer = ({expiryTimestamp}) => {
  const {
    seconds,
    minutes,
    hours,
  } = useTimer({expiryTimestamp, onExpire: () => console.warn('onExpire called')});
  return (
    <div className='timer'>
      <div className='timer__box'>
        <span className='timer__numbers'>{hours}</span>
        <p className='timer__text'>часов</p>
      </div>
      <p className='timer__dots'>:</p>
      <div className='timer__box'>
        <span className='timer__numbers'>{minutes}</span>
        <p className='timer__text'>минут</p>
      </div>
      <p className='timer__dots'>:</p>
      <div className='timer__box'>
        <span className='timer__numbers'>{seconds}</span>
        <p className='timer__text'>секунд</p>
      </div>
    </div>
  );
};

export default Timer;
