import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const OrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const OrderDetails = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    // Fetch order details from an API or sample data
    const mockOrder = {
      id: parseInt(id),
      customer: 'John Doe',
      total: 29.99,
      items: [
        { id: 1, name: 'Product 1', quantity: 2, price: 9.99 },
        { id: 2, name: 'Product 2', quantity: 1, price: 19.99 },
      ],
    };
    setOrder(mockOrder);
  }, [id]);

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <OrderDetailsContainer>
      <h2>Order #{order.id}</h2>
      <p>Customer: {order.customer}</p>
      <p>Total: ${order.total}</p>
      <h3>Items</h3>
      <ul>
        {order.items.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}, Price: ${item.price}
          </li>
        ))}
      </ul>
    </OrderDetailsContainer>
  );
};

export default OrderDetails;