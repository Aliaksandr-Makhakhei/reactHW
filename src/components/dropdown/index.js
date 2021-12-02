import React, { useState } from "react";
import "./style.css";

const options = ["Market launch date", "Operating system", "Screen size"];

const Dropdown = () => {
  const [dropdown, setDrop] = useState(false);

  const onClickDropdown = () => {
    setDrop(!dropdown);
  };

  const items = options.map((item) => {
    return (
      <ul>
        <li>{item}</li>
      </ul>
    );
  });

  return (
    <>
      <button onClick={onClickDropdown}>Extra options {dropdown ? "🔺" : "🔻"}</button>
      {dropdown && items}
    </>
  );
};

export default Dropdown;