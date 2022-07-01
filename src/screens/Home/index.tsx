import React from 'react';
import { Text } from 'react-native';
import Navbar from '../../components/Navbar';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Text>Home</Text>
      <Navbar />
    </Container>
  );
};

export default Home;
