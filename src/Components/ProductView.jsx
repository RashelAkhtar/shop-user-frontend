import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/ProductView.css";

const API = import.meta.env.VITE_API_URL;

const ProductView = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [loading, setLoading] = useState(true); // true at first

  useEffect(() => {
    setLoading(true); // start loading whenever category changes
    axios
      .get(`${API}/products/${category}`)
      .then((res) => setProducts(res.data))
      .catch(() => alert(`Failed to load ${category} products`))
      .finally(() => setLoading(false)); // stop loading always
  }, [category]);

  const openModal = (product) => {
    setSelectedProduct(product);
    setPhoneNumber("");
    setBookingSuccess(false);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setPhoneNumber("");
    setBookingSuccess(false);
  };

  const handleBooking = async () => {
    if (!phoneNumber.trim()) {
      alert("Please enter your phone number.");
      return;
    }

    try {
      await axios.post(`${API}/bookings`, {
        product_id: selectedProduct.id,
        phone: phoneNumber,
      });
      setBookingSuccess(true);
    } catch (error) {
      alert("Booking failed. Try again.");
    }
  };

  return (
    <div className="product-view">
      {/* 🔄 Loader while fetching */}
      {loading ? (
        <div className="loader">Loading products...</div>
      ) : (
        <div className="product-grid">
          {products.map((item) => (
            <div
              key={item.id}
              className="product-card"
              onClick={() => openModal(item)}
            >
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedProduct && (
        <div className="modal-overlay">
          <div className="modal success">
            {!bookingSuccess ? (
              <>
                <img src={selectedProduct.image} alt={selectedProduct.name} />
                <h2>{selectedProduct.name}</h2>
                <p>₹{selectedProduct.price}</p>
                <p>{selectedProduct.description}</p>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <div className="modal-buttons">
                  <button onClick={handleBooking} className="btn-green">
                    Book Now
                  </button>
                  <button onClick={closeModal} className="btn-red">
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2>Booking Confirmed ✅</h2>
                <p>We will contact you at {phoneNumber} shortly.</p>
                <button onClick={closeModal} className="btn-blue">
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductView;
