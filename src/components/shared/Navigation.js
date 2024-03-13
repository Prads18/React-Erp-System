import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: #E0E0E0;
  padding: 0.8rem;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  
  a {
    text-decoration: none;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const Navigation = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <Link to="/">Dashboard</Link>
        </NavItem>
        <NavItem>
          <Link to="/products">Products</Link>
        </NavItem>
        <NavItem>
          <Link to="/orders">Orders</Link>
        </NavItem>
        <NavItem>
          <Link to="/orders/calendar">Orders Calendar</Link>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Navigation;