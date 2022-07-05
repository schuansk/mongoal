import React from 'react';
import CategoryList from '../../components/Category/List';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { Container, Content } from './styles';

const Category: React.FC = () => {
  return (
    <Container>
      <Header title="Categorias" />
      <Content>
        <CategoryList />
      </Content>
      <Navbar name="Category" />
    </Container>
  );
};

export default Category;
