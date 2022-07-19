/* eslint no-param-reassign: ["error", { "props": false }] */
import React from 'react';
import Input from '../../Input';
import Modal from '../../Modal';
import {
  ConfirmButton,
  ConfirmIcon,
  ModalContent,
  ModalSection,
  ModalTitle,
} from './styles';

type ModalProps = {
  toggleModal(): void;
  isVisible: boolean;
};

const GoalModal: React.FC<ModalProps> = ({ toggleModal, isVisible }) => {
  const [goal, setGoal] = React.useState('');

  return (
    <Modal toggleModal={toggleModal} isVisible={isVisible} height={0.32}>
      <ModalTitle>Minha meta</ModalTitle>
      <ModalContent>
        <ModalSection>
          <Input
            defaultValue={goal}
            placeholder="0,00"
            callback={value => setGoal(value)}
          />
        </ModalSection>
        <ModalSection>
          <ConfirmButton onPress={() => ({})}>
            <ConfirmIcon />
          </ConfirmButton>
        </ModalSection>
      </ModalContent>
    </Modal>
  );
};

export default GoalModal;
