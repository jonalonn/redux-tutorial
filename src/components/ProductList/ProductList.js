import React from "react";
import Product from "../Product";
import Title from "../Title";

const ProductList = ({ products }) => [
  <Title title={"Store of things"} key="p1" />,
  <ul key="p2" className="product-list">
    {products &&
      products.map(({ title, text, price, image }, i) => (
        <li className="product" key={i}>
          <Product title={title} text={text} price={price} image={image} />
        </li>
      ))}
  </ul>
];

export default ProductList;
