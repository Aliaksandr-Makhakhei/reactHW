import React, { useState } from "react";
import "./style.css";

const options = ["Market launch date", "Operating system", "Screen size"];

const Dropdown = () => {
  const [dropdown, setDrop] = useState(false);

  const onClickDropdown = () => {
    setDrop(!dropdown);
  };

  const items = options.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  return (
    <>
      <button onClick={onClickDropdown}>Extra options {dropdown ? "🔺" : "🔻"}</button>
      {dropdown && <ul>{items}</ul>}
    </>
  );
};

export default Dropdown;
