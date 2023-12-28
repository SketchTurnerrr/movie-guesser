'use client';
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    // Exit if the timer reaches 0
    if (seconds === 0) return;

    // Set up the timer interval
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [seconds]);

  return (
    <div className="block">
      Залишилось: {seconds}{' '}
      {seconds >= 5
        ? 'секунд'
        : seconds === 1
        ? 'секунда'
        : seconds === 0
        ? 'секунд'
        : 'секунди'}
    </div>
  );
};

export default Timer;
