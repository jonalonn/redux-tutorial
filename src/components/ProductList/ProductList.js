import React from "react";
import s from "./ProductList.module.css";
import Product from "../Product";

const ProductList = ({ products = [] }) => (
  <div className={s.Shop}>
    <ul className={s.ProductList}>
      {products &&
        products.map(({ title, text, price, image, id }, i) => (
          <li className="product" key={i}>
            <Product
              title={title}
              text={text}
              price={price}
              image={image}
              id={id}
            />
          </li>
        ))}
    </ul>
  </div>
);

export default ProductList;
