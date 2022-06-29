import React from 'react';
import { Text } from 'react-native';
import Navbar from '../../components/Navbar';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Text>Dashboard</Text>
      <Navbar />
    </Container>
  );
};

export default Dashboard;
