import React from 'react';
import {
  AccountName,
  CategoryName,
  Container,
  Description,
  Details,
  Icon,
  IconContainer,
  TransactionDate,
  TransactionValue,
} from './styles';

const TransactionItem: React.FC = () => {
  return (
    <Container>
      <Description>
        <IconContainer backgroundColor="#8D47FF">
          <Icon name="directions-car" />
        </IconContainer>
        <Details>
          <AccountName>Nubank</AccountName>
          <CategoryName>Carro</CategoryName>
          <TransactionDate>01/01/2022</TransactionDate>
        </Details>
      </Description>
      <TransactionValue deposit={false}>- R$ 3.000,00</TransactionValue>
    </Container>
  );
};

export default TransactionItem;
