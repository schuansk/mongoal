import React from 'react';
import { Text } from 'react-native';
import Navbar from '../../components/Navbar';
import { Container } from './styles';

const Category: React.FC = () => {
  return (
    <Container>
      <Text>Category</Text>
      <Navbar name="Category" action={() => console.log('add category')} />
    </Container>
  );
};

export default Category;
