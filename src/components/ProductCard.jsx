import React from 'react';
import PropTypes from 'prop-types';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom'; // Untuk navigasi ke halaman detail
import './ProductCard.css'; // Import CSS untuk styling

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="card">
      {/* Link ke halaman detail produk */}
      <Link to={`/products/${product.id}`} className="product-link">
        <img src={product.image} alt={product.title} className="card-image" />
      </Link>

      {/* Informasi produk */}
      <div className="card-info">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-description">{product.description}</p>
        <p className="card-price">${product.price.toFixed(2)}</p>
      </div>

      {/* Tombol "Add to Cart" */}
      <button
        className="card-button"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

// Validasi props dengan PropTypes
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};

export default ProductCard;