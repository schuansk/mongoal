import React from 'react';
import TransactionItem from '../Item';
import { Container, Content } from './styles';

const TranstionList: React.FC = () => {
  return (
    <Container>
      <Content>
        <TransactionItem />
      </Content>
    </Container>
  );
};

export default TranstionList;
