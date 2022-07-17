import { Q } from '@nozbe/watermelondb';
import withObservables from '@nozbe/with-observables';
import React from 'react';
import { ListRenderItem } from 'react-native';
import { database } from '../../../database';
import TransactionModel from '../../../database/models/transactionModel';
import TransactionItem from '../Item';
import { Container, Content, ListFooter, RowSeparator } from './styles';

type TransactionListProps = {
  transactions: TransactionModel[];
};

const transactionCollection = database.collections.get('transactions');

const observeTransactions = () =>
  transactionCollection.query(Q.sortBy('created_at', 'desc')).observe();

const enhanceWithTransactions = withObservables([], () => ({
  transactions: observeTransactions(),
}));
const TranstionList: React.FC<TransactionListProps> = ({ transactions }) => {
  const renderItem: ListRenderItem<TransactionModel> = ({
    item: transaction,
  }) => {
    return <TransactionItem key={transaction.id} transaction={transaction} />;
  };

  return (
    <Container>
      <Content
        data={transactions}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={RowSeparator}
        ListFooterComponent={ListFooter}
      />
    </Container>
  );
};

const TransactionListRender = enhanceWithTransactions(TranstionList);

export default TransactionListRender;
