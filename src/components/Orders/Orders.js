import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const OrderList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 50%;
`;

const OrderItem = styled.li`
  background-color: #f5f5f5;
  padding: 1rem;
  text-align: center;
  border-radius: 0.5rem;
  margin: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  a{
    text-decoration:none;
  }
`;

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from an API or sample data
    const mockOrders = [
      { id: 1, customer: 'John Doe', total: 29.99 },
      { id: 2, customer: 'Jane Smith', total: 54.99 },
      { id: 3, customer: 'Bob Johnson', total: 99.99 },
    ];
    setOrders(mockOrders);
  }, []);

  return (
    <OrdersContainer>
      <h2>Orders Management</h2>
      <OrderList>
        {orders.map((order) => (
          <OrderItem key={order.id}>
            <Link to={`/orders/${order.id}`}>
              Order #{order.id} - {order.customer}
            </Link>
            <p>Total: ${order.total}</p>
          </OrderItem>
        ))}
      </OrderList>
    </OrdersContainer>
  );
};

export default Orders;