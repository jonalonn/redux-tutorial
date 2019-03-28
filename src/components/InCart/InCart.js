import React from "react";
import s from "./InCart.module.css";

const InCart = ({ items = 0 }) => (
  <span className={s.InCart}>InCart: {items}</span>
);

export default InCart;
