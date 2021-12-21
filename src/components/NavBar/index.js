import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

const types = [1, 2];
const colors = ["red", "gray", "blue", "cyan", "yellow", "orange"];

const NavBar = () => {
  const [type, setType] = useState("1");
  const [color, setColor] = useState("red");
  const history = useHistory();

  const onClickType = (type) => {
    setType(type);
    history.push(`/figure/${type}/${color}`);
  };
  const onClickColor = (color) => {
    setColor(color);
    history.push(`/figure/${type}/${color}`);
  };

  const typeBtn = types.map((type) => {
    return (
      <button key={type} onClick={() => onClickType(type)} className="choose__figure">{type}</button>
    );
  });

  const figureColor = colors.map((color) => {
    return (
      <button key={color} onClick={() => onClickColor(color)} className="choose__color">{color}</button>
    );
  });

  return (
    <>
      {typeBtn}
      {figureColor}
    </>
  );
};

export default NavBar;