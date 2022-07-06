import { MaterialIcons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { AnyStyledComponent } from 'styled-components';
import styled from 'styled-components/native';

type ButtonProps = {
  light: boolean;
};

export const Container = styled(
  RectButton as unknown as AnyStyledComponent,
)<ButtonProps>`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  z-index: 100;
  justify-content: center;
  align-items: center;
  background: ${props =>
    props.light ? props.theme.colors.white : props.theme.colors.purple_700};
  elevation: ${props => props.theme.constants.elevation};
`;

export const ActionIcon = styled(MaterialIcons).attrs(props => ({
  name: 'add',
  size: props.theme.constants.iconSize,
}))<ButtonProps>`
  color: ${props =>
    props.light ? props.theme.colors.purple_700 : props.theme.colors.white};
`;
