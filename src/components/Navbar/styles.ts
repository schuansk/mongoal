import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { AnyStyledComponent } from 'styled-components';
import styled from 'styled-components/native';

interface IconProps {
  selected: boolean;
}

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 55px;
  background: ${props => props.theme.colors.white};
  flex-direction: row;
`;

export const Option = styled.TouchableOpacity.attrs(props => ({
  activeOpacity: props.theme.constants.buttonActiveOpacity,
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const HomeIcon = styled(Ionicons as unknown as AnyStyledComponent).attrs(
  props => ({
    name: 'md-home',
    size: props.theme.constants.iconSize,
  }),
)<IconProps>`
  color: ${props =>
    props.selected
      ? props.theme.colors.purple_700
      : props.theme.colors.gray_600};
`;

export const CategoryIcon = styled(
  Ionicons as unknown as AnyStyledComponent,
).attrs(props => ({
  name: 'md-list-outline',
  size: props.theme.constants.iconSize,
  color: props.theme.colors.gray_600,
}))<IconProps>`
  color: ${props =>
    props.selected
      ? props.theme.colors.purple_700
      : props.theme.colors.gray_600};
`;

export const BalanceIcon = styled(
  MaterialIcons as unknown as AnyStyledComponent,
).attrs(props => ({
  name: 'account-balance',
  size: props.theme.constants.iconSize,
  color: props.theme.colors.gray_600,
}))<IconProps>`
  color: ${props =>
    props.selected
      ? props.theme.colors.purple_700
      : props.theme.colors.gray_600};
`;

export const SettingsIcon = styled(
  Ionicons as unknown as AnyStyledComponent,
).attrs(props => ({
  name: 'settings-outline',
  size: props.theme.constants.iconSize,
  color: props.theme.colors.gray_600,
}))<IconProps>`
  color: ${props =>
    props.selected
      ? props.theme.colors.purple_700
      : props.theme.colors.gray_600};
`;
