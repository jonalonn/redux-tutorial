import React from "react";
import s from "./Price.module.css";
import InCart from "../InCart";

const Price = ({ price }) => (
  <div className={s.Price}>
    <span>Price: {price.toString()}:-</span>
    <InCart />
  </div>
);

export default Price;
