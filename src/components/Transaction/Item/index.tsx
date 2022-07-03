import React from 'react';
import { formatValue } from '../../../utils';
import { TransactionData } from '../List';
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

type TransactionItemProps = {
  transaction: TransactionData;
};

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  return (
    <Container>
      <Description>
        <IconContainer backgroundColor="#8D47FF">
          <Icon name="attach-money" />
        </IconContainer>
        <Details>
          <AccountName>{transaction.account.name}</AccountName>
          <CategoryName>{transaction.category.name}</CategoryName>
          <TransactionDate>{transaction.createdAt}</TransactionDate>
        </Details>
      </Description>
      <TransactionValue deposit={transaction.type === 'deposit'}>
        {transaction.type !== 'deposit' && '-'}
        {formatValue(transaction.value)}
      </TransactionValue>
    </Container>
  );
};

export default TransactionItem;
