import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard'; // Import ProductCard
import './ProductDetailPage.css'; // Import file CSS

const ProductDetailPage = () => {
  const { productId } = useParams(); // Mendapatkan ID produk dari URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data produk berdasarkan ID
  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setProduct(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [productId]);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen">Error: {error}</div>;

  return (
    <div className="container">
      {/* Judul Produk */}
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

      {/* Menampilkan detail produk menggunakan ProductCard */}
      <ProductCard product={product} />
    </div>
  );
};

export default ProductDetailPage;