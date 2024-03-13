import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const OrdersCalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const OrdersCalendar = () => {
  const [orders, setOrders] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    // Fetch orders from an API or sample data
    const mockOrders = [
      { id: 1, customer: 'John Doe', total: 29.99, deliveryDate: new Date(2023, 4, 15) },
      { id: 2, customer: 'Jane Smith', total: 54.99, deliveryDate: new Date(2023, 4, 18) },
      { id: 3, customer: 'Bob Johnson', total: 99.99, deliveryDate: new Date(2023, 4, 20) },
    ];
    setOrders(mockOrders);
  }, []);

  const ordersForSelectedDate = orders.filter(
    (order) => order.deliveryDate.toDateString() === selectedDate.toDateString()
  );

  return (
    <OrdersCalendarContainer>
      <h2>Orders Calendar</h2>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        calendarType="US"
        showNeighboringMonth={false}
      />
      <h3>Orders for {selectedDate.toDateString()}</h3>
      <ul>
        {ordersForSelectedDate.map((order) => (
          <li key={order.id}>
            Order #{order.id} - {order.customer} (Total: ${order.total})
          </li>
        ))}
      </ul>
    </OrdersCalendarContainer>
  );
};

export default OrdersCalendar;