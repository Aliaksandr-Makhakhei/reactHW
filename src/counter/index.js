import React, {useState} from "react"
import './style.css'

const Counter = () => {
  const [count, setСounter] = useState(0);
  const onButtonClickPlus = () => {
    setСounter(count + 1);
  };
  const onButtonClickMinus = () => {
    setСounter(count > 0 ? count - 1 : 0);
  };
  return (
    <div className="wrapper">
      <button onClick={onButtonClickPlus}>&#10133;</button>
      <div className="counter">{count}</div>
      <button onClick={onButtonClickMinus}>&#10134;</button>
    </div>
  );
};

export default Counter;