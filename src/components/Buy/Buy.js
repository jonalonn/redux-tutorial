import React from "react";
import s from "./Buy.module.css";
import Price from "../Price";
import Button from "../Button";

const Buy = ({ price, id, title, addItemToCart }) => (
  <div className={s.Buy}>
    <div className={s.ButtonPriceRow}>
      <Price price={price} />
      <Button btnText={"Buy"} onClick={addItemToCart} id={id} />
    </div>
  </div>
);

export default Buy;
