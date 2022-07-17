import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

type TransactionTypeProps = {
  deposit?: boolean;
  selected: boolean;
};

export const Content = styled.View``;

export const ModalSection = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

export const SelectContainer = styled.View`
  width: 100%;
  margin: 0 10px;
  background: ${props => props.theme.colors.gray_100};
  padding: 15px;
  border-radius: 30px;
`;

export const CreateTransactionButton = styled.TouchableOpacity.attrs(props => ({
  activeOpacity: props.theme.constants.buttonActiveOpacity,
}))`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: ${props => props.theme.colors.purple_700};
  justify-content: center;
  align-items: center;
  elevation: ${props => props.theme.constants.elevation};
`;

export const ConfirmIcon = styled(MaterialIcons).attrs(props => ({
  name: 'check',
  size: props.theme.constants.iconSize,
  color: props.theme.colors.white,
}))``;

export const TransactionTypeContainer = styled.TouchableOpacity.attrs(
  props => ({
    activeOpacity: props.theme.constants.buttonActiveOpacity,
  }),
)<TransactionTypeProps>`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  elevation: ${props => props.theme.constants.elevation};
  margin: 0 5px;
  ${props =>
    props.deposit
      ? css`
          background: ${props.selected
            ? props.theme.colors.green_700
            : props.theme.colors.white};
        `
      : css`
          background: ${props.selected
            ? props.theme.colors.red_600
            : props.theme.colors.white};
        `}
`;

export const TransactionTypeIcon = styled(MaterialCommunityIcons).attrs(
  props => ({
    size: props.theme.constants.iconSize,
  }),
)<TransactionTypeProps>`
  ${props =>
    props.deposit
      ? css`
          color: ${props.selected
            ? props.theme.colors.white
            : props.theme.colors.green_700};
        `
      : css`
          color: ${props.selected
            ? props.theme.colors.white
            : props.theme.colors.red_600};
        `}
`;
