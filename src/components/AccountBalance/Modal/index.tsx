/* eslint no-param-reassign: ["error", { "props": false }] */
import React from 'react';
import ColorPicker from 'react-native-wheel-color-picker';
import { database } from '../../../database';
import AccountModel from '../../../database/models/accountModel';
import theme from '../../../theme';
import Input from '../../Input';
import Modal from '../../Modal';
import {
  ColorPickerContainer,
  ConfirmIcon,
  CreateAccountButton,
  ModalContent,
  ModalSection,
  ModalTitle,
} from './styles';

type ModalProps = {
  toggleModal(): void;
  isVisible: boolean;
  accountId?: string;
};

const AccountBalanceModal: React.FC<ModalProps> = ({
  toggleModal,
  isVisible,
  accountId,
}) => {
  const [selectedColor, setSelectedColor] = React.useState('');
  const [accountName, setAccountName] = React.useState('');
  const colorRef = React.useRef<ColorPicker>(null);

  const reset = React.useCallback(
    (changeModal = true) => {
      if (changeModal) toggleModal();
      setAccountName('');
      setSelectedColor('');
    },
    [toggleModal],
  );

  const handleAddNewCategory = React.useCallback(
    async (name: string, color: string) => {
      try {
        await database.write(async () => {
          await database.collections
            .get<AccountModel>('accounts')
            .create(account => {
              account.name = name;
              account.color = color;
            });
        });
        reset(true);
      } catch (error) {
        console.log('error', error);
      }
    },
    [reset],
  );

  const handleSubmit = React.useCallback(() => {
    if (accountName === '') return;
    handleAddNewCategory(accountName, selectedColor);
  }, [accountName, handleAddNewCategory, selectedColor]);

  return (
    <Modal toggleModal={toggleModal} isVisible={isVisible} height={0.59}>
      <ModalTitle>{accountId ? 'Editar' : 'Criar nova'} conta</ModalTitle>
      <ModalContent>
        <ModalSection>
          <ColorPickerContainer>
            <ColorPicker
              ref={colorRef}
              color={theme.colors.gray_100}
              thumbSize={40}
              sliderSize={20}
              noSnap
              row
              swatches={false}
              onColorChangeComplete={color => setSelectedColor(color)}
            />
          </ColorPickerContainer>
        </ModalSection>
        <ModalSection>
          <Input
            defaultValue={accountName}
            placeholder="Nome da conta"
            callback={name => setAccountName(name)}
          />
        </ModalSection>
        <ModalSection>
          <CreateAccountButton onPress={() => handleSubmit()}>
            <ConfirmIcon />
          </CreateAccountButton>
        </ModalSection>
      </ModalContent>
    </Modal>
  );
};

export default AccountBalanceModal;
