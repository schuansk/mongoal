/* eslint no-param-reassign: ["error", { "props": false }] */
import React from 'react';
import AccountBalanceListRender from '../../components/AccountBalance/List';
import AccountBalanceModal from '../../components/AccountBalance/Modal';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import theme from '../../theme';
import { Container, Content } from './styles';

const AccountBalance: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
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
          deleteAccount={(id: string) => ({})}
          editAccount={(id: string) => ({})}
        />
      </Content>
      <Navbar name="AccountBalance" />
      <AccountBalanceModal
        toggleModal={toggleModal}
        isVisible={isVisible}
        accountId=""
      />
    </Container>
  );
};

export default AccountBalance;
