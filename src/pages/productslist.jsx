import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/product-list.css';
import { Link } from 'react-router-dom';
// import ProductForm from '../Dashboard/AccessoriesReport';

const ProductCard = ({ image, name, price }) => (
  <div className="product-card">
    <img src={image} alt={name} className="product-image" />
    <h2 className="product-name">{name}</h2>
    <p className="product-price">{price}</p>
   <Link to='/paymentnew'className="buy-now-button">Buy Now</Link>
  </div>
);

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:9001/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error appropriately
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {/* <ProductForm onAddProduct={addProduct} /> */}
      <div className="product-page">
        {products.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
