import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialTime }: { initialTime: number }) => {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timerInterval);
          // Perform actions when the timer reaches zero
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  // Convert seconds to minutes and seconds
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  return (
    <span>
      <span className="inline-block w-[44px] text-left">
        {`${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}{' '}
      </span>
      <span>minutes</span>
    </span>
  );
};

export default CountdownTimer;
