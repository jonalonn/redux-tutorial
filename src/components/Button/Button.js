import React from "react";

const Button = ({ onClick, btnText }) => (
  <button className="button" onClick={onClick}>
    {btnText}
  </button>
);

export default Button;
