import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details from an API or sample data
    const sampleProduct = {
      id: parseInt(id),
      name: 'Product 1',
      description: 'This is a sample product description.',
      price: 9.99,
    };
    setProduct(sampleProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <ProductDetailsContainer>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </ProductDetailsContainer>
  );
};

export default ProductDetails;