import React from "react";
import Title from "../Title";
import Text from "../Text";
import Buy from "../Buy";
import Image from "../Image";

const Product = ({ title, text, price, image }) => [
  <Title title={title} key="01" />,
  <Text text={text} key="02" />,
  <Image image={image} key="03" />,
  <Buy price={price} key="04" />
];

export default Product;
