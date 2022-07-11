import React from 'react';
import DeleteCategoryModal from '../../components/Category/DeleteModal';
import CategoryList from '../../components/Category/List';
import CategoryModal from '../../components/Category/Modal';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import theme from '../../theme';
import { Container, Content } from './styles';

const Category: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [deleteCategoryIsVisible, setDeleteCategoryIsVisible] =
    React.useState(false);
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

  const toggleDeleteModal = React.useCallback(() => {
    setDeleteCategoryIsVisible(!deleteCategoryIsVisible);
    if (deleteCategoryIsVisible) setCategoryId('');
  }, [deleteCategoryIsVisible]);

  const deleteCategory = React.useCallback(
    (id: string) => {
      setCategoryId(id);
      toggleDeleteModal();
    },
    [toggleDeleteModal],
  );

  return (
    <Container>
      <Header
        title="Categorias"
        onPress={toggleModal}
        background={[theme.colors.purple_700, theme.colors.blue_600]}
      />
      <Content>
        <CategoryList
          editCategory={(id: string) => editCategory(id)}
          deleteCategory={(id: string) => deleteCategory(id)}
        />
      </Content>
      <Navbar name="Category" />
      <CategoryModal
        toggleModal={toggleModal}
        isVisible={isVisible}
        categoryId={categoryId}
      />
      <DeleteCategoryModal
        toggleModal={toggleDeleteModal}
        isVisible={deleteCategoryIsVisible}
        categoryId={categoryId}
      />
    </Container>
  );
};

export default Category;
