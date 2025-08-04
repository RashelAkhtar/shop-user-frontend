import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import Footer from "./Footer";
import AdBanner from "../AdBanner";

const HomePage = () => {
  return (
    <div>
      <div className="home">
        <header className="hero">
          <h2>Welcome to</h2>
          <h1>JANNAT SHOPPING</h1>
          <p>Discover shoes, clothes, beauty, gifts & more!</p>
          <Link to="/products" className="shop-now-btn">
            Explore Now
          </Link>
        </header>

        <section className="features">
          <div className="feature-card animate-up">
            <h3>Stylish Footwear</h3>
            <p>Trendy shoes for every step you take.</p>
          </div>
          <div className="feature-card animate-up">
            <h3>Fashion Clothing</h3>
            <p>Comfortable and elegant outfits for all.</p>
          </div>
          <div className="feature-card animate-up">
            <h3>Beauty Products</h3>
            <p>Glow up with trusted skincare and makeup.</p>
          </div>
          <div className="feature-card animate-up">
            <h3>Gift Items</h3>
            <p>Perfect presents for every special moment.</p>
          </div>
          <div className="feature-card animate-up">
            <h3>Home Essentials</h3>
            <p>Useful and aesthetic items for your home.</p>
          </div>
          <div className="feature-card animate-up">
            <h3>Bags</h3>
            <p>Stylish and Comfortable Bags.</p>
          </div>
          <div className="feature-card animate-up">
            <h3>Jewelry</h3>
            <p>Style yourself with jewels.</p>
          </div>
        </section>
      </div>
      <AdBanner />
      <Footer />
    </div>
  );
};

export default HomePage;
