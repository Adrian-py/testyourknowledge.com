import React from "react";

export default function Timer({ timeLeft }) {
  return (
    <div className="timer">
      <p className="timer__text">Time Left:</p>
      <p className="timer__time">{timeLeft}</p>
    </div>
  );
}
