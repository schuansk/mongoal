import React from 'react';
import { ActionIcon, Container } from './styles';

type ActionButtonProps = {
  action(): void;
};

const ActionButton: React.FC<ActionButtonProps> = ({ action }) => {
  return (
    <Container onPress={action}>
      <ActionIcon />
    </Container>
  );
};

export default ActionButton;
