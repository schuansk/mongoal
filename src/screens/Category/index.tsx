import React from 'react';
import CategoryList from '../../components/Category/List';
import Header from '../../components/Header';
import IconSelector from '../../components/IconSelector';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import Navbar from '../../components/Navbar';
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
  const [selectedIcon, setSelectedIcon] = React.useState('');
  const [categoryName, setCategoryName] = React.useState('');

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    console.log('icon', selectedIcon);
    console.log('category', categoryName);
  }, [selectedIcon, categoryName]);

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
            <IconSelector callback={(icon: string) => setSelectedIcon(icon)} />
            <Input
              placeholder="Nome da categoria"
              callback={name => setCategoryName(name)}
            />
          </ModalSection>
          <ModalSection>
            <CreateCategoryButton>
              <ConfirmIcon />
            </CreateCategoryButton>
          </ModalSection>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Category;
