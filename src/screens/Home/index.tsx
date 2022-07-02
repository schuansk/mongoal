import React from 'react';
import GoalIndicador from '../../components/GoalIndicator';
import Navbar from '../../components/Navbar';
import { Container, Content, CurrentBalance, Header } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <Header>
          <CurrentBalance>R$ 1.000,00</CurrentBalance>
        </Header>
        <GoalIndicador />
      </Content>
      <Navbar name="Home" />
    </Container>
  );
};

export default Home;
