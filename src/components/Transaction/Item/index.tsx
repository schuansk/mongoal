import React from 'react';
import { database } from '../../../database';
import AccountModel from '../../../database/models/accountModel';
import CategoryModel from '../../../database/models/categoryModel';
import TransactionModel from '../../../database/models/transactionModel';
import { formatDate, formatValue } from '../../../utils';
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
  transaction: TransactionModel;
};

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  const [category, setCategoty] = React.useState<CategoryModel>(
    {} as CategoryModel,
  );
  const [account, setAccount] = React.useState<AccountModel>(
    {} as AccountModel,
  );

  React.useEffect(() => {
    (async () => {
      const categoryResponse = await database
        .get<CategoryModel>('categories')
        .find(transaction.category.id);
      setCategoty(categoryResponse);

      const accountResponse = await database
        .get<AccountModel>('accounts')
        .find(transaction.account.id);
      setAccount(accountResponse);
    })();
  }, [transaction]);
  return (
    <Container>
      <Description>
        <IconContainer
          backgroundColor={account.color ? `${account.color} ` : '#8D47ff'}
        >
          <Icon name={category.icon} />
        </IconContainer>
        <Details>
          <AccountName>{account.name}</AccountName>
          <CategoryName>{category.name}</CategoryName>
          <TransactionDate>
            {formatDate(new Date(transaction.createdAt))}
          </TransactionDate>
        </Details>
      </Description>
      <TransactionValue deposit={transaction.deposit}>
        {!transaction.deposit && '-'}
        {formatValue(transaction.value / 100)}
      </TransactionValue>
    </Container>
  );
};

export default TransactionItem;
