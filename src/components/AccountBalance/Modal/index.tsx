/* eslint no-param-reassign: ["error", { "props": false }] */
import React from 'react';
import Input from '../../Input';
import Modal from '../../Modal';
import {
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
  const [accountName, setAccountName] = React.useState('');

  return (
    <Modal toggleModal={toggleModal} isVisible={isVisible} height={0.32}>
      <ModalTitle>{accountId ? 'Editar' : 'Criar nova'} conta</ModalTitle>
      <ModalContent>
        <ModalSection>
          <Input
            defaultValue={accountName}
            placeholder="Nome da conta"
            callback={name => setAccountName(name)}
          />
        </ModalSection>
        <ModalSection>
          <CreateAccountButton onPress={() => ({})}>
            <ConfirmIcon />
          </CreateAccountButton>
        </ModalSection>
      </ModalContent>
    </Modal>
  );
};

export default AccountBalanceModal;
