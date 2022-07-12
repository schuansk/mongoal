/* eslint no-param-reassign: ["error", { "props": false }] */
import React from 'react';
import ColorPicker from 'react-native-wheel-color-picker';
import Input from '../../Input';
import Modal from '../../Modal';
import {
  ColorPickerContainer,
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
  const [selectedColor, setSelectedColor] = React.useState('');
  const [accountName, setAccountName] = React.useState('');
  const colorRef = React.useRef<ColorPicker>(null);

  return (
    <Modal toggleModal={toggleModal} isVisible={isVisible} height={0.59}>
      <ModalTitle>{accountId ? 'Editar' : 'Criar nova'} conta</ModalTitle>
      <ModalContent>
        <ModalSection>
          <ColorPickerContainer>
            <ColorPicker
              ref={colorRef}
              thumbSize={40}
              sliderSize={20}
              noSnap
              row
              swatches={false}
              onColorChangeComplete={color => setSelectedColor(color)}
            />
          </ColorPickerContainer>
        </ModalSection>
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
