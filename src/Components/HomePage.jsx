import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/HomePage.css";
import Footer from "./Footer";
import Products from "./Products";
import { useState } from "react";
import { useEffect } from "react";

function HomePage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setProducts(Products);
  }, []);

  const handleProductClick = (route) => navigate(route);

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to JANNAT SHOPPING</h1>
          <p>Discover shoes, clothes, beauty, gifts & more!</p>
          <Link to="/products" className="shop-btn">
            Explore Now
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
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

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
