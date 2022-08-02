import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import React from 'react';
import { Dimensions } from 'react-native';
import { Body, Container, Content } from './styles';

export interface ModalProps {
  children: React.ReactNode;
  modalRef: React.MutableRefObject<BottomSheetMethods>;
  defaultHeight: number;
  handleChange(index: number): void;
}

const { height } = Dimensions.get('window');

const Modal: React.FC<ModalProps> = ({
  children,
  modalRef,
  defaultHeight,
  handleChange,
}) => {
  const snapPoints = React.useMemo(
    () => [1, height - defaultHeight || 1],
    [defaultHeight],
  );

  return (
    <Container
      ref={modalRef}
      index={0}
      snapPoints={snapPoints}
      enableHandlePanningGesture
      onChange={handleChange}
    >
      <Content>
        <Body>{children}</Body>
      </Content>
    </Container>
  );
};

export default Modal;
