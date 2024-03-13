import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  color: #FFC9BE;
  padding: 0.1rem;
  text-align: center;
  
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>ERP System</h1>
    </HeaderContainer>
  );
};

export default Header;