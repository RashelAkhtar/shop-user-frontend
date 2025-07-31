import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ProductDisplay from "./Components/ProductDisplay";
import Navbar from "./Components/Navbar";
import AdBanner from "./AdBanner.jsx";

// Products Routes
import Clothes from "./Components/ProductsPages/Clothes";
import Bags from "./Components/ProductsPages/Bags";
import Beauty from "./Components/ProductsPages/Beauty";
import HomeEssentials from "./Components/ProductsPages/HomeEssentials";
import Shoes from "./Components/ProductsPages/Shoes";
import GiftItems from "./Components/ProductsPages/GiftItems";
import Jewelry from "./Components/ProductsPages/Jewelry";

function App() {
  return (
    <Router>
      <Navbar />
      <AdBanner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductDisplay />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/bags" element={<Bags />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/Home-Essentials" element={<HomeEssentials />} />
        <Route path="/Footwear" element={<Shoes />} />
        <Route path="/gifts" element={<GiftItems />} />
        <Route path="/jewelry" element={<Jewelry />} />
      </Routes>
    </Router>
  );
}

export default App;
