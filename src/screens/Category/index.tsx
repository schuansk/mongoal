import BottomSheet from '@gorhom/bottom-sheet';
import React from 'react';
import { Keyboard } from 'react-native';
import DeleteCategoryModal from '../../components/Category/DeleteModal';
import CategoryList from '../../components/Category/List';
import CategoryModal from '../../components/Category/Modal';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import theme from '../../theme';
import { Container, Content } from './styles';

const Category: React.FC = () => {
  const [categoryId, setCategoryId] = React.useState('');

  const modalRef = React.useRef<BottomSheet>(null);

  const toggleModal = () => {
    modalRef.current?.expand();
  };

  const editCategory = React.useCallback((id: string) => {
    setCategoryId(id);
    toggleModal();
  }, []);

  const handleChange = (index: number) => {
    if (index <= 0) {
      setCategoryId('');
      Keyboard.dismiss();
    }
  };

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
        modalRef={modalRef}
        categoryId={categoryId}
        handleChange={handleChange}
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
