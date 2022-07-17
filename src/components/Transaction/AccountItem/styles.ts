import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

type OptionProps = {
  selected: boolean;
};

export const OptionContainer = styled.TouchableOpacity.attrs(props => ({
  activeOpacity: props.theme.constants.buttonActiveOpacity,
}))<OptionProps>`
  padding: 0 15px;
  background: ${props =>
    props.selected ? props.theme.colors.gray_100 : props.theme.colors.white};
`;

export const OptionContent = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SelectedItem = styled(MaterialIcons).attrs(props => ({
  size: props.theme.constants.iconSize,
  color: props.theme.colors.gray_600,
}))``;

export const CheckItem = styled(MaterialIcons).attrs(props => ({
  name: 'check',
  size: props.theme.constants.iconSize,
  color: props.theme.colors.purple_700,
}))``;

export const OptionTitle = styled.Text``;
