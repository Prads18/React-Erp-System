import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const FeatureCard = styled.div`
  background-color: #E0E0E0;
  padding: 1rem;
  width: 50%;
  border-radius: 0.5rem;
  margin: 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <h2>Welcome to the ERP System</h2>
      <FeatureCard>
        <h3>Products Management</h3>
        <p>View, add, and update product listings.</p>
      </FeatureCard>
      <FeatureCard>
        <h3>Orders Management</h3>
        <p>View and manage customer orders.</p>
      </FeatureCard>
    </DashboardContainer>
  );
};

export default Dashboard;