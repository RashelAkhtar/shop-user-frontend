import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="shop-footer">
      <div className="footer-container">
        <p>📍 Location: Dampur, Assam, India</p>
        <p>📧 Email: jannatshopping360@gmail.com</p>
        <p>
          © {new Date().getFullYear()} www.jannatshopping.com. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
