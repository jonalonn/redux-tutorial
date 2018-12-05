import React from "react";
import Product from "../Product";

const ProductList = ({ products = [] }) => (
  <div className="shop">
    <ul className="product-list">
      {products &&
        products.map(({ title, text, price, image, id }, i) => (
          <li className="product" key={i}>
            <Product title={title} text={text} price={price} image={image} />
          </li>
        ))}
    </ul>
  </div>
);

export default ProductList;
