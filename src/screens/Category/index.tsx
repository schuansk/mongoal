/* eslint no-param-reassign: ["error", { "props": false }] */
import React from 'react';
import CategoryList from '../../components/Category/List';
import CategoryModal from '../../components/Category/Modal';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { Container, Content } from './styles';

const Category: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleModal = React.useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  return (
    <Container>
      <Header title="Categorias" onPress={toggleModal} />
      <Content>
        <CategoryList />
      </Content>
      <Navbar name="Category" />
      <CategoryModal toggleModal={toggleModal} isVisible={isVisible} />
    </Container>
  );
};

export default Category;
