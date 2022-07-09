import React from 'react';
import CategoryList from '../../components/Category/List';
import Header from '../../components/Header';
import IconSelector from '../../components/IconSelector';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import Navbar from '../../components/Navbar';
import { Container, Content, ModalContent, ModalSection } from './styles';

const Category: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedIcon, setSelectedIcon] = React.useState('');

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    console.log('icon', selectedIcon);
  }, [selectedIcon]);

  return (
    <Container>
      <Header title="Categorias" onPress={toggleModal} />
      <Content>
        <CategoryList />
      </Content>
      <Navbar name="Category" />
      <Modal toggleModal={toggleModal} isVisible={isOpen} height={0.25}>
        <ModalContent>
          <ModalSection>
            <Input placeholder="Nome da categoria" />
            <IconSelector callback={(icon: string) => setSelectedIcon(icon)} />
          </ModalSection>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Category;
