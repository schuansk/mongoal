/* eslint no-param-reassign: ["error", { "props": false }] */
import React from 'react';
import CategoryList from '../../components/Category/List';
import CategoryModal from '../../components/Category/Modal';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { Container, Content } from './styles';

const Category: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [categoryId, setCategoryId] = React.useState('');

  const toggleModal = React.useCallback(() => {
    setIsVisible(!isVisible);
    if (isVisible) setCategoryId('');
  }, [isVisible]);

  const editCategory = React.useCallback(
    (id: string) => {
      setCategoryId(id);
      toggleModal();
    },
    [toggleModal],
  );

  return (
    <Container>
      <Header title="Categorias" onPress={toggleModal} />
      <Content>
        <CategoryList editCategory={(id: string) => editCategory(id)} />
      </Content>
      <Navbar name="Category" />
      <CategoryModal
        toggleModal={toggleModal}
        isVisible={isVisible}
        categoryId={categoryId}
      />
    </Container>
  );
};

export default Category;
