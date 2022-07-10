/* eslint no-param-reassign: ["error", { "props": false }] */
import React from 'react';
import CategoryList from '../../components/Category/List';
import Header from '../../components/Header';
import IconSelector, { MaterialIconName } from '../../components/IconSelector';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import Navbar from '../../components/Navbar';
import { database } from '../../database';
import CategoryModel from '../../database/models/categoryModel';
import {
  ConfirmIcon,
  Container,
  Content,
  CreateCategoryButton,
  ModalContent,
  ModalSection,
  ModalTitle,
} from './styles';

const Category: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedIcon, setSelectedIcon] =
    React.useState<MaterialIconName>('category');
  const [categoryName, setCategoryName] = React.useState('');

  const toggleModal = React.useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleAddNewCategory = React.useCallback(
    async (name: string, icon: string) => {
      try {
        await database.write(async () => {
          await database.collections
            .get<CategoryModel>('categories')
            .create(category => {
              category.name = name;
              category.icon = icon;
            });
        });
        setCategoryName('');
        setSelectedIcon('category');
        toggleModal();
      } catch (error) {
        console.log('error', error);
      }
    },
    [toggleModal],
  );

  const handleSubmit = React.useCallback(() => {
    if (categoryName === '') return;
    handleAddNewCategory(categoryName, selectedIcon);
  }, [categoryName, handleAddNewCategory, selectedIcon]);

  return (
    <Container>
      <Header title="Categorias" onPress={toggleModal} />
      <Content>
        <CategoryList />
      </Content>
      <Navbar name="Category" />
      <Modal toggleModal={toggleModal} isVisible={isOpen} height={0.32}>
        <ModalTitle>Criar nova categoria</ModalTitle>
        <ModalContent>
          <ModalSection>
            <IconSelector
              defaultIcon={selectedIcon}
              callback={(icon: MaterialIconName) => setSelectedIcon(icon)}
            />
            <Input
              placeholder="Nome da categoria"
              callback={name => setCategoryName(name)}
            />
          </ModalSection>
          <ModalSection>
            <CreateCategoryButton onPress={() => handleSubmit()}>
              <ConfirmIcon />
            </CreateCategoryButton>
          </ModalSection>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Category;
