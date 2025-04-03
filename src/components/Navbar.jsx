// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css'; 

const Navbar = () => {
  // Gunakan Context API untuk mendapatkan state keranjang
  const { cart } = useCart();

  return (
    <nav className="navbar">
        <Link to="/" className="navbar-logo">
          SKIBIDI.
        </Link>

        {/* Navigasi Menu */}
        <div className="navbar-links-container">
          <Link
            to="/"
            className="navbar-links"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="navbar-links"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="navbar-links"
          >
            Cart
            {/* Badge untuk jumlah item di keranjang */}
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1 -mt-2 -mr-2">
                ({cart.length})
              </span>
            )}
          </Link>
        </div>
    </nav>
  );
};

export default Navbar;