import React from "react";
import s from "./Product.module.css";
import Title from "../Title";
import Text from "../Text";
import Buy from "../Buy";
import Image from "../Image";

const Product = ({ title, text, price, image, id }) => (
  <div className={s.Product}>
    <Title title={title} />
    <Text text={text} />
    <Image image={image} />
    <Buy price={price} id={id} />
  </div>
);

export default Product;
