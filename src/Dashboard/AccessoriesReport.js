import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/product-list.css';
import '../Dashboard/AccessoriesReport.css'; // Ensure CSS styles for the form are included

const ProductCard = ({ product, onRemove, onEdit }) => {
  const { id, image, name, price } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-price">Rs.{price}</p>
      <div className="product-card-buttons">
        <button className="edit-button" onClick={() => onEdit(product)}>Edit</button>
        <button className="remove-button" onClick={() => onRemove(id)}>Remove</button>
      </div>
    </div>
  );
};

const AccessoriesReport = ({ onAddProduct, onUpdateProduct, editingProduct }) => {
  const [image, setImage] = useState(editingProduct ? editingProduct.image : '');
  const [name, setName] = useState(editingProduct ? editingProduct.name : '');
  const [price, setPrice] = useState(editingProduct ? editingProduct.price : '');
  const [isEditing, setIsEditing] = useState(!!editingProduct);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (image && name && price) {
      try {
        if (isEditing) {
          // Update existing product
          const response = await axios.put(`http://localhost:9001/api/products/${editingProduct.id}`, {
            image,
            name,
            price,
          });

          if (response.status === 200) {
            alert('Product updated successfully!');
            onUpdateProduct();
          } else {
            alert('Failed to update product. Please try again.');
          }
        } else {
          // Add new product
          const response = await axios.post('http://localhost:9001/api/products', {
            image,
            name,
            price,
          });

          if (response.status === 201) {
            alert('Product added successfully!');
            onAddProduct();
          } else {
            alert('Failed to add product. Please try again.');
          }
        }
        setImage('');
        setName('');
        setPrice('');
        setIsEditing(false);
      } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        alert('An error occurred. Please try again.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="product-form">
      <h1>{isEditing ? 'Edit Product' : 'Add New Product'}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Image URL:
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Enter image URL"
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product name"
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter product price"
          />
        </label>
        <button type="submit">{isEditing ? 'Update Product' : 'Add Product'}</button>
      </form>
    </div>
  );
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:9001/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const refreshProducts = async () => {
    try {
      const response = await axios.get('http://localhost:9001/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleRemove = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:9001/api/products/${id}`);
      if (response.status === 200) {
        alert('Product removed successfully!');
        refreshProducts();
      } else {
        alert('Failed to remove product. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  return (
    <div>
      {showForm && (
        <AccessoriesReport
          onAddProduct={refreshProducts}
          onUpdateProduct={refreshProducts}
          editingProduct={editingProduct}
        />
      )}
      <div className="product-page">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onRemove={handleRemove}
            onEdit={handleEdit}
          />
        ))}
        <div className="product-card add-product-card" onClick={() => setShowForm(true)}>
          <h2>+</h2>
          <p>Add New Product</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
