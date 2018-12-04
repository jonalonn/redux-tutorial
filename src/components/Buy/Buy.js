import React from "react";
import Price from "../Price";
import Button from "../Button";

const Buy = ({ price }) => (
  <div className="buy">
    <Price price={price} />
    <Button btnText={"Buy"} onClick={() => ({})} />
    {/* <InCart /> */}
  </div>
);

export default Buy;
