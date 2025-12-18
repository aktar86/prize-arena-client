import React, { useEffect, useState } from "react";

const Countdown = ({ contestDeadline }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(contestDeadline) - new Date();

    if (difference <= 0) {
      return null;
    }

    const deadline = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
    return deadline;
  };

  const [timeLeft, setTimeleft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeleft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [contestDeadline]);

  if (!timeLeft) {
    return <p className="text-red-500 font-bold text-xl">Contest Ended</p>;
  }

  return (
    <p className="">
      Deadline end in <br />
      <span className="text-3xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
        {timeLeft.days}d: {timeLeft.hours}h: {timeLeft.minutes}m :{" "}
        {timeLeft.seconds}s
      </span>
    </p>
  );
};

export default Countdown;
