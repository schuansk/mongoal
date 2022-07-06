import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { ActionIcon, Container } from './styles';

interface ActionButtonProps extends RectButtonProps {
  light?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ light, ...rest }) => {
  return (
    <Container light={light} {...rest}>
      <ActionIcon light={light} />
    </Container>
  );
};

export default ActionButton;
