import React from 'react';
import GoalIndicador from '../../components/GoalIndicator';
import Navbar from '../../components/Navbar';
import TranstionList from '../../components/Transaction/List';
import { Container, Content, CurrentBalance, Header } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <Header>
          <CurrentBalance>R$ 1.000,00</CurrentBalance>
        </Header>
        <GoalIndicador />
        <TranstionList />
      </Content>
      <Navbar name="Home" action={() => console.log('add transaction')} />
    </Container>
  );
};

export default Home;
