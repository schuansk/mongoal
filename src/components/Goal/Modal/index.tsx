/* eslint no-param-reassign: ["error", { "props": false }] */
import React from 'react';
import { useGoal } from '../../../hooks/goal';
import Input from '../../Input';
import Modal, { ModalProps } from '../../Modal';
import {
  ConfirmButton,
  ConfirmIcon,
  ModalContent,
  ModalSection,
  ModalTitle,
} from './styles';

interface GoalModalProps extends Pick<ModalProps, 'handleChange' | 'modalRef'> {
  closed: boolean;
}

const GoalModal: React.FC<GoalModalProps> = ({
  handleChange,
  modalRef,
  closed,
}) => {
  const [value, setValue] = React.useState('');
  const { goal, updateGoal } = useGoal();

  const handleSubmit = React.useCallback(() => {
    const valueToNumber = Number(value);
    if (!Number.isNaN(valueToNumber)) {
      updateGoal(valueToNumber);
      modalRef.current?.close();
    }
  }, [modalRef, updateGoal, value]);

  React.useEffect(() => {
    setValue(`${goal.value}`);
  }, [goal]);

  React.useEffect(() => {
    if (closed) {
      setValue(`${goal.value}`);
    }
  }, [closed, goal]);

  return (
    <Modal modalRef={modalRef} defaultHeight={540} handleChange={handleChange}>
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
