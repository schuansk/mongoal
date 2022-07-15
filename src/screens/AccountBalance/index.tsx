/* eslint no-param-reassign: ["error", { "props": false }] */
import React from 'react';
import DeleteAccountModal from '../../components/AccountBalance/DeleteModal';
import AccountBalanceListRender from '../../components/AccountBalance/List';
import AccountBalanceModal from '../../components/AccountBalance/Modal';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import theme from '../../theme';
import { Container, Content } from './styles';

const AccountBalance: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [accountId, setAccountId] = React.useState('');
  const [deleteAccountIsVisible, setDeleteAccountIsVisible] =
    React.useState(false);

  const toggleModal = React.useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  const editAccount = React.useCallback(
    (id: string) => {
      setAccountId(id);
      toggleModal();
    },
    [toggleModal],
  );

  const toggleDeleteModal = React.useCallback(() => {
    setDeleteAccountIsVisible(!deleteAccountIsVisible);
    if (deleteAccountIsVisible) setAccountId('');
  }, [deleteAccountIsVisible]);

  const deleteCategory = React.useCallback(
    (id: string) => {
      setAccountId(id);
      toggleDeleteModal();
    },
    [toggleDeleteModal],
  );

  return (
    <Container>
      <Header
        title="Contas"
        onPress={toggleModal}
        background={[theme.colors.purple_700, theme.colors.orange_700]}
      />
      <Content>
        <AccountBalanceListRender
          deleteAccount={(id: string) => deleteCategory(id)}
          editAccount={(id: string) => editAccount(id)}
        />
      </Content>
      <Navbar name="AccountBalance" />
      <AccountBalanceModal
        toggleModal={toggleModal}
        isVisible={isVisible}
        accountId={accountId}
      />
      <DeleteAccountModal
        toggleModal={toggleDeleteModal}
        isVisible={deleteAccountIsVisible}
        accountId={accountId}
      />
    </Container>
  );
};

export default AccountBalance;
