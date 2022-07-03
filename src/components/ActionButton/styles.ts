import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs(props => ({
  activeOpacity: props.theme.constants.buttonActiveOpacity,
}))`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 60px;
  right: 10px;
  border-radius: 25px;
  z-index: 100;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.purple_700};
  elevation: ${props => props.theme.constants.elevation};
`;

export const ActionIcon = styled(MaterialIcons).attrs(props => ({
  name: 'add',
  color: props.theme.colors.white,
  size: props.theme.constants.iconSize,
}))``;
