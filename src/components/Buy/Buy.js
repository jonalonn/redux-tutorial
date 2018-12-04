import React from "react";
import Price from "../Price";
import InCart from "../InCart";
import Button from "../Button";

const Buy = ({ price }) => (
  <div className="buy">
    <Price price={price} />
    <InCart />
    <Button btnText={"Buy"} onClick={() => ({})} />
  </div>
);

export default Buy;
