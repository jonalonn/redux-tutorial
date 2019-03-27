import React from "react";
import s from "./Cart.module.css";
import Title from "../Title";

const Cart = ({ products }) => (
  <div className={s.Cart}>
    <Title title={"Cart"} key={"c1"} />
  </div>
);

export default Cart;
