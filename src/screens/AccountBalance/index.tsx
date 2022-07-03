import React from 'react';
import { Text } from 'react-native';
import Navbar from '../../components/Navbar';
import { Container } from './styles';

const AccountBalance: React.FC = () => {
  return (
    <Container>
      <Text>Account Balance</Text>
      <Navbar name="AccountBalance" action={() => console.log('add account')} />
    </Container>
  );
};

export default AccountBalance;
