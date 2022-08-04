/* eslint no-param-reassign: ["error", { "props": false }] */
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
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
  accountId?: string;
  modalRef: React.MutableRefObject<BottomSheetMethods>;
  handleChange(index: number): void;
};

const DeleteAccountModal: React.FC<ModalProps> = ({
  accountId,
  modalRef,
  handleChange,
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
      modalRef.current?.close();
    } catch (error) {
      console.log(error);
    }
  }, [account, modalRef]);

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
    <Modal defaultHeight={600} modalRef={modalRef} handleChange={handleChange}>
      <ModalTitle>Apagar {account.name}?</ModalTitle>
      <ModalContent>
        <ModalSection>
          <DeleteAccountButton delete onPress={deleteAccount}>
            <ButtonTitle delete>Sim</ButtonTitle>
          </DeleteAccountButton>
        </ModalSection>
      </ModalContent>
    </Modal>
  );
};

export default DeleteAccountModal;
