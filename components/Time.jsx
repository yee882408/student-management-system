"use client";
import { useEffect, useState } from "react";

const Time = () => {
  let time = new Date().toLocaleTimeString("en-GB");
  let date = new Date().toLocaleDateString();
  const [currentDate, setCurrentDate] = useState(date);
  const [currentTime, setCurrentTime] = useState(time);
  useEffect(() => {
    const updateTime = () => {
      let time = new Date().toLocaleTimeString("en-GB");
      let date = new Date().toLocaleDateString();
      setCurrentTime(time);
      setCurrentDate(date);
    };
    setInterval(updateTime, 1000);
  }, []);

  return (
    <div className="text-center">
      {<p className="text-sm">{currentDate}</p>}
      {<p className="text-lg">{currentTime}</p>}
    </div>
  );
};

export default Time;
