import React from 'react';
import AccountModel from '../../../database/models/accountModel';
import {
  AccountName,
  ActionIcon,
  ColorContainer,
  Container,
  Description,
  Details,
} from './styles';

type AccountItemProps = {
  account: AccountModel;
  onPress(): void;
  onLongPress(): void;
};

const AccountItem: React.FC<AccountItemProps> = ({
  account,
  onPress,
  onLongPress,
}) => {
  return (
    <Container onPress={onPress} onLongPress={onLongPress}>
      <Description>
        <ColorContainer color={account.color} />
        <Details>
          <AccountName>{account.name}</AccountName>
        </Details>
      </Description>
      <ActionIcon />
    </Container>
  );
};

export default AccountItem;
