import React from 'react';
import { ListRenderItem } from 'react-native';
import TransactionItem from '../Item';
import { Container, Content, ListFooter, RowSeparator } from './styles';

export type TransactionData = {
  id: string;
  value: number;
  type: string;
  createdAt: string;
  category: {
    name: string;
  };
  account: {
    name: string;
  };
};
const TranstionList: React.FC = () => {
  const [transactions, setTransactions] = React.useState<TransactionData[]>([]);

  const renderItem: ListRenderItem<TransactionData> = ({
    item: transaction,
  }) => {
    return <TransactionItem key={transaction.id} transaction={transaction} />;
  };

  React.useEffect(() => {
    const data = [
      {
        id: '1',
        value: 200,
        type: 'deposit',
        createdAt: '01/01/2022',
        category: {
          name: 'Salário',
        },
        account: {
          name: 'Nubank',
        },
      },
      {
        id: '2',
        value: 100,
        type: 'withdrawal',
        createdAt: '01/01/2022',
        category: {
          name: 'Carro',
        },
        account: {
          name: 'Caixa',
        },
      },
      {
        id: '3',
        value: 200.3,
        type: 'deposit',
        createdAt: '01/01/2022',
        category: {
          name: 'Carro',
        },
        account: {
          name: 'Caixa',
        },
      },
      {
        id: '4',
        value: 1000,
        type: 'withdrawal',
        createdAt: '01/01/2022',
        category: {
          name: 'Carro',
        },
        account: {
          name: 'Caixa',
        },
      },
      {
        id: '5',
        value: 400.5,
        type: 'deposit',
        createdAt: '01/01/2022',
        category: {
          name: 'Carro',
        },
        account: {
          name: 'Caixa',
        },
      },
      {
        id: '6',
        value: 200.1,
        type: 'withdrawal',
        createdAt: '01/01/2022',
        category: {
          name: 'Carro',
        },
        account: {
          name: 'Caixa',
        },
      },
      {
        id: '7',
        value: 200,
        type: 'withdrawal',
        createdAt: '01/01/2022',
        category: {
          name: 'Carro',
        },
        account: {
          name: 'Caixa',
        },
      },
    ];
    setTransactions(data);
  }, []);

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

export default TranstionList;
