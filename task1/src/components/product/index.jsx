import Image from "next/image";
import React from "react";
import ProductCard from "./card";

function Products() {
  const products = [
    {
      index: 1,
      name: "Cacti Plant",
      price: "$19.99",
      image: "/assets/img/product1.png",
    },
    {
      index: 2,
      name: "Cactus Plant",
      price: "$11.99",
      image: "/assets/img/product2.png",
    },
    {
      index: 3,
      name: "Aloe Vera Plant",
      price: "$7.99",
      image: "/assets/img/product3.png",
    },
    {
      index: 4,
      name: "Succulent Plant",
      price: "$5.99",
      image: "/assets/img/product4.png",
    },
    {
      index: 5,
      name: "Succulent Plant",
      price: "$10.99",
      image: "/assets/img/product5.png",
    },
    {
      index: 6,
      name: "Green Plant",
      price: "$8.99",
      image: "/assets/img/product6.png",
    },
  ];
  return (
    <section className="product section container" id="products">
      <h2 className="section__title-center">
        Check out our <br /> products
      </h2>

      <p className="product__description">
        Here are some selected plants from our showroom, all are in excellent
        shape and has a long life span. Buy and enjoy best quality.
      </p>

      <div className="product__container grid">
        {products?.length > 0 ? (
          products?.map((product, index) => {
            return <ProductCard key={index} productData={product} />;
          })
        ) : (
          <div>No product found.</div>
        )}
      </div>
    </section>
  );
}

export default Products;
