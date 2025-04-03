import React from 'react';
import ProductCard from '../components/ProductCard';
import useFetch from '../hooks/useFetch';
import './ProductListPage.css'


const ProductListPage = () => {
  // Menggunakan custom hook untuk fetching data
  const { data: products, loading, error } = useFetch('https://fakestoreapi.com/products');

  // Handle loading state
  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div className="text-red-500 text-center py-4">Error: {error}</div>;
  }

  // Handle empty data state
  if (!Array.isArray(products) || products.length === 0) {
    return <div className="text-gray-600 text-center py-4">No products available.</div>;
  }

  return (
    <div>
      <h1 className="product-title">Product List</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;