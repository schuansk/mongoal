import React from 'react';
import ActionButton from '../../components/ActionButton';
import GoalIndicador from '../../components/Goal/Indicator';
import Navbar from '../../components/Navbar';
import CreateTransaction from '../../components/Transaction/Create';
import TranstionList from '../../components/Transaction/List';
import {
  ActionButtonContainer,
  Container,
  Content,
  CurrentBalance,
  Header,
} from './styles';

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
      <ActionButtonContainer>
        <ActionButton onPress={toggleModal} />
      </ActionButtonContainer>
      <Navbar name="Home" />
      <CreateTransaction toggleModal={toggleModal} isVisible={isOpen} />
    </Container>
  );
};

export default Home;
