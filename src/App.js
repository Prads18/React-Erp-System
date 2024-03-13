import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/shared/Header';
import Navigation from './components/shared/Navigation';
import Dashboard from './components/Dashboard/Dashboard';
import Products from './components/Products/Products';
import ProductDetails from './components/Products/ProductDetails';
import Orders from './components/Orders/Orders';
import OrderDetails from './components/Orders/OrderDetails';
import OrdersCalendar from './components/Orders/OrdersCalendar';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders/:id" element={<OrderDetails />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/calendar" element={<OrdersCalendar />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;