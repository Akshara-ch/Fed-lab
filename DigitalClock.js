import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [mytime, setTime] = useState("");

  const tick = () => {
    const d = new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();
    let time = `${hours > 12 ? hours - 12 : hours}:${minutes}:${seconds}`;

    if (hours < 12) {
      time = time + " AM";
    } else {
      time = time + " PM";
    }

    setTime(time);
  };

  useEffect(() => {
    const t = setInterval(tick, 1000);
    return () => {
      clearInterval(t);
    };
  }, []); 

  return (
    <div>
      <h1>DigitalClock</h1>
      <h2>{mytime}</h2>
    </div>
  );
}

export default DigitalClock;