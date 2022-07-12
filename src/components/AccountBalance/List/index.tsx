import { Q } from '@nozbe/watermelondb';
import withObservables from '@nozbe/with-observables';
import React from 'react';
import { ListRenderItem } from 'react-native';
import { database } from '../../../database';
import AccountModel from '../../../database/models/accountModel';
import AccountItem from '../Item';
import { Container, Content, ListFooter, RowSeparator } from './styles';

interface IAccountBalance {
  accounts: AccountModel[];
  editAccount(id: string): void;
  deleteAccount(id: string): void;
}

const accountCollection = database.collections.get('accounts');

const observeAccounts = () =>
  accountCollection.query(Q.sortBy('name', Q.asc)).observe();

const enhanceWithAccounts = withObservables([], () => ({
  accounts: observeAccounts(),
}));

const AccountBalanceList: React.FC<IAccountBalance> = ({
  editAccount,
  deleteAccount,
  accounts,
}) => {
  const renderItem: ListRenderItem<AccountModel> = ({ item: account }) => {
    return (
      <AccountItem
        key={account.id}
        account={account}
        onPress={() => editAccount(account.id)}
        onLongPress={() => deleteAccount(account.id)}
      />
    );
  };

  return (
    <Container>
      <Content
        data={accounts}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={RowSeparator}
        ListFooterComponent={ListFooter}
      />
    </Container>
  );
};

const AccountBalanceListRender = enhanceWithAccounts(AccountBalanceList);

export default AccountBalanceListRender;
