import React, { useEffect, useState } from "react";

export default function Timer({ handleGameProgression }) {
  const [timeLeft, setTimeLeft] = useState(120);

  // Start and check timer
  useEffect(() => {
    if (!timeLeft) {
      handleGameProgression("End");
      return;
    }

    const timeInterval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, [timeLeft, setTimeLeft, handleGameProgression]);

  return (
    <div className="timer">
      <p className="timer__text">Time Left:</p>
      <p className="timer__time">{timeLeft}</p>
    </div>
  );
}
