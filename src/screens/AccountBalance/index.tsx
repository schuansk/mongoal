/* eslint no-param-reassign: ["error", { "props": false }] */
import BottomSheet from '@gorhom/bottom-sheet';
import React from 'react';
import { Keyboard } from 'react-native';
import DeleteAccountModal from '../../components/AccountBalance/DeleteModal';
import AccountBalanceListRender from '../../components/AccountBalance/List';
import AccountBalanceModal from '../../components/AccountBalance/Modal';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import theme from '../../theme';
import { Container, Content } from './styles';

const AccountBalance: React.FC = () => {
  const [accountId, setAccountId] = React.useState('');
  const modalRef = React.useRef<BottomSheet>(null);
  const modalDeleteRef = React.useRef<BottomSheet>(null);

  const toggleModal = React.useCallback(() => {
    modalRef.current?.expand();
  }, [modalRef]);

  const editAccount = React.useCallback(
    (id: string) => {
      setAccountId(id);
      toggleModal();
    },
    [toggleModal],
  );

  const deleteAccount = React.useCallback((id: string) => {
    setAccountId(id);
    modalDeleteRef.current?.expand();
  }, []);

  const handleChange = (index: number) => {
    if (index <= 0) {
      setAccountId('');
      Keyboard.dismiss();
    }
  };

  return (
    <Container>
      <Header
        title="Contas"
        onPress={toggleModal}
        background={[theme.colors.purple_700, theme.colors.orange_700]}
      />
      <Content>
        <AccountBalanceListRender
          deleteAccount={(id: string) => deleteAccount(id)}
          editAccount={(id: string) => editAccount(id)}
        />
      </Content>
      <Navbar name="AccountBalance" />
      <AccountBalanceModal
        modalRef={modalRef}
        accountId={accountId}
        handleChange={handleChange}
      />
      <DeleteAccountModal
        modalRef={modalDeleteRef}
        accountId={accountId}
        handleChange={handleChange}
      />
    </Container>
  );
};

export default AccountBalance;
