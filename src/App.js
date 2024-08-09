import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const now = new Date();
    const currentTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      18,
      0,
      0
    ); // Today at 6 PM
    if (now > currentTime) {
      currentTime.setDate(currentTime.getDate() + 1); // If it's already past 6 PM, set to next day 6 PM
    }

    const difference = currentTime - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <main>
        <h2>ရုံးဆင်းပြီ...</h2>
    </main>
  );
}
