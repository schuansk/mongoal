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
  const [isMounted, setIsMounted] = React.useState(false);

  const reset = React.useCallback(
    (changeModal = true) => {
      if (changeModal) toggleModal();
      setAccountName('');
      setSelectedColor('');
    },
    [toggleModal],
  );

  const getAccount = React.useCallback(
    async (id: string) => {
      const account = await database.get<AccountModel>('accounts').find(id);
      if (isMounted) {
        setAccountName(account.name);
        setSelectedColor(account.color);
      }
    },
    [isMounted],
  );

  const handleEditAccount = React.useCallback(
    async (name: string, color: string) => {
      try {
        await database.write(async () => {
          const account = await database
            .get<AccountModel>('accounts')
            .find(accountId);

          await account.update(currentAccount => {
            currentAccount.name = name;
            currentAccount.color = color;
          });
        });
        reset();
      } catch (error) {
        console.log('error', error);
      }
    },
    [accountId, reset],
  );

  const handleAddNewaccount = React.useCallback(
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
    if (accountId) {
      handleEditAccount(accountName, selectedColor);
      return;
    }
    handleAddNewaccount(accountName, selectedColor);
  }, [
    accountId,
    accountName,
    handleAddNewaccount,
    handleEditAccount,
    selectedColor,
  ]);

  React.useEffect(() => {
    setIsMounted(true);
    if (isMounted) {
      if (accountId) {
        getAccount(accountId);
      }
    }
    return () => {
      setIsMounted(false);
    };
  }, [accountId, getAccount, isMounted]);

  React.useEffect(() => {
    if (isMounted) {
      if (!isVisible) reset(false);
    }
  }, [isMounted, isVisible, reset]);

  return (
    <Modal toggleModal={toggleModal} isVisible={isVisible} height={0.59}>
      <ModalTitle>{accountId ? 'Editar' : 'Criar nova'} conta</ModalTitle>
      <ModalContent>
        <ModalSection>
          <ColorPickerContainer>
            <ColorPicker
              ref={colorRef}
              color={selectedColor || theme.colors.gray_100}
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
