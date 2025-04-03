import React, { useMemo } from 'react';
import { useCart } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  // Menggunakan useMemo untuk menghitung total harga
  const totalPrice = useMemo(() => {
    if (cart.length === 0) return '0.00'; // Handle empty cart safely
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  }, [cart]);

  // Early return untuk keranjang kosong
  if (cart.length === 0) {
    return <p className="product-null">Keranjang kosong. Silakan tambahkan produk.</p>;
  }

  return (
    <main>
      <ul className="product-grid">
        {cart.map((item) => (
          <li key={item.id} className="product">
            <div>
              <h3>{item.title}</h3>
              <img src={item.image} alt={item.title} className="product-image" />
              <p>${item.price.toFixed(2)} x {item.quantity}</p>
            </div>
            <button
              className="remove-button"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <h3>Total Price: ${totalPrice}</h3>
      </div>
    </main>
  );
};

export default CartPage;