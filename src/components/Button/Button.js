import React from "react";
import s from "./Button.module.css";

const Button = ({ onClick, btnText, id }) => (
  <button className={s.Button} onClick={onClick} data-product-id={id}>
    {btnText}
  </button>
);

export default Button;
