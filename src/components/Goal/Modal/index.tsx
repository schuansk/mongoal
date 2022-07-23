/* eslint no-param-reassign: ["error", { "props": false }] */
import React from 'react';
import { useGoal } from '../../../hooks/goal';
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
  const [value, setValue] = React.useState('');
  const { goal, updateGoal } = useGoal();

  const handleSubmit = React.useCallback(() => {
    const valueToNumber = Number(value);
    if (!Number.isNaN(valueToNumber)) {
      updateGoal(valueToNumber);
      toggleModal();
    }
  }, [toggleModal, updateGoal, value]);

  React.useEffect(() => {
    setValue(`${goal.value}`);
  }, [goal]);

  return (
    <Modal toggleModal={toggleModal} isVisible={isVisible} height={0.32}>
      <ModalTitle>Minha meta</ModalTitle>
      <ModalContent>
        <ModalSection>
          <Input
            keyboardType="decimal-pad"
            defaultValue={value}
            placeholder="0,00"
            callback={content => setValue(content)}
          />
        </ModalSection>
        <ModalSection>
          <ConfirmButton onPress={handleSubmit}>
            <ConfirmIcon />
          </ConfirmButton>
        </ModalSection>
      </ModalContent>
    </Modal>
  );
};

export default GoalModal;
