import Image from "next/image";
import React from "react";

function ProductCard({ productData }) {
  return (
    <article className="product__card">
      <div className="product__circle"></div>

      <Image
        src={productData?.image}
        alt=""
        className="product__img"
        width={120}
        height={120}
      />

      <h3 className="product__title">{productData?.name}</h3>
      <span className="product_price">{productData?.price}</span>

      <button className="button--flex product__button">
        <i className="ri-shopping-bag-line"></i>
      </button>
    </article>
  );
}

export default ProductCard;
