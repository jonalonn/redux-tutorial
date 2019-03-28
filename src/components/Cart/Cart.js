import React from "react";
import s from "./Cart.module.css";
import Title from "../Title";

const matchProductWithId = (products, item) =>
  products.find(product => product.id === item);

const Cart = ({ products, cartItems }) =>
  console.log(cartItems) || (
    <div className={s.Cart}>
      <Title title={"Cart"} />
      {cartItems.map((item, index) => {
        const cartProduct = matchProductWithId(products, item);

        return (
          <p key={index}>
            {cartProduct.title}
            <span className={s.CartItemPrice}>{`${cartProduct.price}:-`}</span>
          </p>
        );
      })}
    </div>
  );

export default Cart;
