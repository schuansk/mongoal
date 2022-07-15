import styled, { css } from 'styled-components/native';

type ButtonProps = {
  delete?: boolean;
};

export const ModalContent = styled.View`
  padding: 10px;
`;

export const ModalSection = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

export const ModalTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  color: ${props => props.theme.colors.gray_600};
`;

export const DeleteAccountButton = styled.TouchableOpacity.attrs(props => ({
  activeOpacity: props.theme.constants.buttonActiveOpacity,
}))<ButtonProps>`
  width: 150px;
  height: 50px;
  border-radius: 25px;
  background: ${props =>
    props.delete ? props.theme.colors.red_600 : 'transparent'};
  justify-content: center;
  align-items: center;
  ${props =>
    props.delete &&
    css`
      elevation: ${props.theme.constants.elevation};
    `}
`;

export const ButtonTitle = styled.Text<ButtonProps>`
  color: ${props =>
    props.delete ? props.theme.colors.white : props.theme.colors.gray_600};
`;
