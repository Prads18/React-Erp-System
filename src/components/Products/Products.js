import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const ProductList = styled.ul`
  list-style-type: none;
  padding: 0;
  width:50%;
`;

const ProductItem = styled.li`
  background-color: #f5f5f5;
  padding: 1rem;
  text-align: center;
  border-radius: 0.5rem;
  margin: 0.5rem;
  a{
    text-decoration:none;
  }
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from an API or sample data
    const sampleProducts = [
      { id: 1, name: 'Product 1', price: 9.99 },
      { id: 2, name: 'Product 2', price: 14.99 },
      { id: 3, name: 'Product 3', price: 19.99 },
    ];
    setProducts(sampleProducts);
  }, []);

  return (
    <ProductsContainer>
      <h2>Products Management</h2>
      <ProductList>
        {products.map((product) => (
          <ProductItem key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
            <p>Price: ${product.price}</p>
          </ProductItem>
        ))}
      </ProductList>
    </ProductsContainer>
  );
};

export default Products;