"use client";
import React, { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Countdown() {
  const targetDate = new Date("2025-08-30T00:00:00");
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const difference = +targetDate - +new Date();
    let time: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      time = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return time;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <h2>⏳ Falta muy poco para vernos ⏳</h2>
      <div className="timebox">
        <div>
          <strong>{timeLeft.days}</strong>
          <div>días</div>
        </div>
        <div>
          <strong>{timeLeft.hours}</strong>
          <div>horas</div>
        </div>
        <div>
          <strong>{timeLeft.minutes}</strong>
          <div>minutos</div>
        </div>
        <div>
          <strong>{timeLeft.seconds}</strong>
          <div>segundos</div>
        </div>
      </div>
    </div>
  );
}
