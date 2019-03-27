import React from "react";
import s from "./Buy.module.css";
import Price from "../Price";
import InCart from "../InCart";
import Button from "../Button";

const buyItem = e => console.log(e.currentTarget.dataset.productId);

const Buy = ({ price, id }) => (
  <div className={s.Buy}>
    <Price price={price} />
    <div>
      <InCart />
      <Button btnText={"Buy"} onClick={buyItem} id={id} />
    </div>
  </div>
);

export default Buy;
