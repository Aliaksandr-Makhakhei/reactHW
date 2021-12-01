import React, {useState} from "react"
import './style.css'

const CyclicButton = () => {
  const [emoji, setEmoji] = useState("🛫");
  return <button onClick={() => setEmoji(emoji === "🛫" ? "🛬" : emoji === "🛬" ? "💥" : "🛫")}>{emoji}</button>;
};

export default CyclicButton;