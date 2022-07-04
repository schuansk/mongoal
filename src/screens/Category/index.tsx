import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { Container, Content } from './styles';

const Category: React.FC = () => {
  return (
    <Container>
      <Header title="Categorias" />
      <Content />
      <Navbar name="Category" />
    </Container>
  );
};

export default Category;
