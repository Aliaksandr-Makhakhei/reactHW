import React, { useEffect, useState } from "react";
import "./style.css";

const TimePicker = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    if (hours > 23) {
      setHours(0);
    } else if (hours < 0) {
      setHours(23);
    }

    if (minutes > 59) {
      setMinutes(0);
      setHours(hours + 1);
    } else if (minutes < 0) {
      setMinutes(59);
      setHours(hours - 1);
    }
  }, [hours, minutes]);

  return (
    <div className="timer">
      <div className="timer__hours">
        <div className="hours__counter">{hours}</div>
        <button onClick={() => setHours(hours + 1)}>+</button>
        <button onClick={() => setHours(hours - 1)}>-</button>
      </div>
      <div className="two__dots">:</div>
      <div className="timer__minutes">
        <div className="minutes__counter">{minutes}</div>
        <button onClick={() => setMinutes(minutes + 1)}>+</button>
        <button onClick={() => setMinutes(minutes - 1)}>-</button>
      </div>
    </div>
  );
};

export default TimePicker;