/* eslint no-param-reassign: ["error", { "props": false }] */
import React from 'react';
import { database } from '../../../database';
import AccountModel from '../../../database/models/accountModel';
import Modal from '../../Modal';
import {
  ButtonTitle,
  DeleteAccountButton,
  ModalContent,
  ModalSection,
  ModalTitle,
} from './styles';

type ModalProps = {
  toggleModal(): void;
  isVisible: boolean;
  accountId?: string;
};

const DeleteAccountModal: React.FC<ModalProps> = ({
  toggleModal,
  isVisible,
  accountId,
}) => {
  const [account, setAccount] = React.useState<AccountModel>(
    {} as AccountModel,
  );
  const [isMounted, setIsMounted] = React.useState(false);

  const getAccount = React.useCallback(
    async (id: string) => {
      const response = await database.get<AccountModel>('accounts').find(id);
      if (isMounted) {
        setAccount(response);
      }
    },
    [isMounted],
  );

  const deleteAccount = React.useCallback(async () => {
    try {
      await database.write(async () => {
        await account.destroyPermanently();
      });
      toggleModal();
    } catch (error) {
      console.log(error);
    }
  }, [account, toggleModal]);

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

  return (
    <Modal toggleModal={toggleModal} isVisible={isVisible} height={0.22}>
      <ModalTitle>Apagar {account.name}?</ModalTitle>
      <ModalContent>
        <ModalSection>
          <DeleteAccountButton delete onPress={deleteAccount}>
            <ButtonTitle delete>Sim</ButtonTitle>
          </DeleteAccountButton>
          <DeleteAccountButton onPress={toggleModal}>
            <ButtonTitle>Cancelar</ButtonTitle>
          </DeleteAccountButton>
        </ModalSection>
      </ModalContent>
    </Modal>
  );
};

export default DeleteAccountModal;
