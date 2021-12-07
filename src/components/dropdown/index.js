import React, { useState } from "react";
import "./style.css";

const options = ["Market launch date", "Operating system", "Screen size"];

const Dropdown = () => {
  const [dropdown, setDrop] = useState(false);

  const onClickDropdown = () => {
    setDrop(!dropdown);
  };

  return (
    <>
      <button onClick={onClickDropdown}>Extra options {dropdown ? "🔺" : "🔻"}</button>
      {dropdown && (<ul>{options.map((item) => (<li key={item}>{item}</li>))}</ul>)}
    </>
  );
};

export default Dropdown;
