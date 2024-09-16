// app/components/CountdownTimer.tsx
"use client";

import { useState, useEffect } from "react";

const CountdownTimer = () => {
  // Set your target date (e.g., Dec 31, 2024, 23:59:59)
  const targetDate = new Date("2024-12-31T23:59:59");

  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Function to calculate remaining time
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      // If the countdown is complete
      if (difference <= 0) {
        return {
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      // Calculate remaining time
      const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { months, days, hours, minutes, seconds };
    };

    // Update the countdown every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup the timer on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
        <div className="flex justify-center space-x-4">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">{timeLeft.months}</span>
            <span>Months</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">{timeLeft.days}</span>
            <span>Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">{timeLeft.hours}</span>
            <span>Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">{timeLeft.minutes}</span>
            <span>Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">{timeLeft.seconds}</span>
            <span>Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
