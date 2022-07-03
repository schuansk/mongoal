import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { ActionIcon, Container } from './styles';

const ActionButton: React.FC<RectButtonProps> = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <ActionIcon />
    </Container>
  );
};

export default ActionButton;
