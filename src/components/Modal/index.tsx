import React from 'react';
import {
  Body,
  CloseIcon,
  CloseModalButton,
  Container,
  Content,
  Header,
} from './styles';

export interface ModalProps {
  children: React.ReactNode;
  isVisible: boolean;
  toggleModal(): void;
  height: number;
}

const Modal: React.FC<ModalProps> = ({
  children,
  isVisible,
  height,
  toggleModal,
}) => {
  return (
    <Container onBackdropPress={toggleModal} isVisible={isVisible}>
      <Content height={height}>
        <Header>
          <CloseModalButton onPress={toggleModal}>
            <CloseIcon />
          </CloseModalButton>
        </Header>
        <Body>{children}</Body>
      </Content>
    </Container>
  );
};

export default Modal;
