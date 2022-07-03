import React from 'react';
import { Text } from 'react-native';
import GoalIndicador from '../../components/GoalIndicator';
import Modal from '../../components/Modal';
import Navbar from '../../components/Navbar';
import TranstionList from '../../components/Transaction/List';
import { Container, Content, CurrentBalance, Header } from './styles';

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Content>
        <Header>
          <CurrentBalance>R$ 1.000,00</CurrentBalance>
        </Header>
        <GoalIndicador />
        <TranstionList />
      </Content>
      <Navbar name="Home" action={toggleModal} />
      <Modal toggleModal={toggleModal} isVisible={isOpen} height={0.25}>
        <Text>Home</Text>
      </Modal>
    </Container>
  );
};

export default Home;
