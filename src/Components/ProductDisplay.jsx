import React, { useEffect, useState } from "react";
import "../styles/ProductDisplay.css";
import Products from "./Products";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const ProductDisplay = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setProducts(Products);
  }, []);

  const handleProductClick = (route) => navigate(route);

  return (
    <div>
      <main className="shop">
        <h1 className="shop__title">Shop Products</h1>
        <div className="shop__grid">
          {products.map(({ id, route, image, name, description, price }) => (
            <article
              className="product-card"
              key={id}
              onClick={() => handleProductClick(route)}
              role="button"
              tabIndex={0}
            >
              <img
                src={image}
                alt={name}
                className="product-card__image"
                loading="lazy"
              />
              <div className="product-card__body">
                <h3 className="product-card__title">{name}</h3>
                <p className="product-card__description">{description}</p>
                <span className="product-card__price">{price}</span>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDisplay;
