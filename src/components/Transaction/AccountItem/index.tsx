import React from 'react';
import AccountModel from '../../../database/models/accountModel';
import { ItemProps } from '../../Select';
import {
  CheckItem,
  OptionContainer,
  OptionContent,
  OptionTitle,
} from './styles';

interface AccountItemProps
  extends Pick<ItemProps, 'selectedItem' | 'handleSelection'> {
  item: AccountModel;
}

const AccountItem: React.FC<AccountItemProps> = ({
  item,
  selectedItem,
  handleSelection,
}) => {
  return (
    <OptionContainer
      selected={selectedItem === item.id}
      onPress={() => handleSelection(item.name)}
    >
      <OptionContent>
        <OptionTitle>{item.name}</OptionTitle>
        {selectedItem === item.id && <CheckItem />}
      </OptionContent>
    </OptionContainer>
  );
};

export default AccountItem;
