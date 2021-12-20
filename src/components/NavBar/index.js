import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  const [type, setType] = useState("");
  const [color, setColor] = useState("");
  const history = useHistory();

  history.push(`/figure/${type}/${color}`);

  const types = [1, 2];
  const colors = ["red", "gray", "blue", "cyan", "yellow", "orange"];

  const typeBtn = types.map((type) => {
    return (
      <button key={type} onClick={() => setType(type)} className="choose__figure">{type}</button>
    );
  });

  const figureColor = colors.map((color) => {
    return (
      <button key={color} onClick={() => setColor(color)} className="choose__color">{color}</button>
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