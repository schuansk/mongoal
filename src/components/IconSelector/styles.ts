import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

type OptionProps = {
  selected: boolean;
};

export const Container = styled.View`
  margin: 0 10px;
  background: ${props => props.theme.colors.gray_100};
  padding: 10px;
  border-radius: 10px;
`;

export const CurrentSelection = styled.TouchableOpacity``;

export const CurrentSelectionTitle = styled.Text``;

export const OptionsSelectorContainer = styled.Modal``;

export const OptionsSelectorHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 15px 0 10px;
`;

export const GoBack = styled.TouchableOpacity.attrs(props => ({
  activeOpacity: props.theme.constants.buttonActiveOpacity,
}))``;

export const GoBackIcon = styled(MaterialIcons).attrs(props => ({
  name: 'chevron-left',
  size: props.theme.constants.iconSize,
  color: props.theme.colors.gray_600,
}))``;

export const OptionsSelectorTitle = styled.Text`
  color: ${props => props.theme.colors.gray_600};
  font-size: 16px;
  font-weight: bold;
`;

export const OptionsSelectorCancel = styled.TouchableOpacity.attrs(props => ({
  activeOpacity: props.theme.constants.buttonActiveOpacity,
}))``;

export const OptionsSelectorCancelTitle = styled.Text`
  color: ${props => props.theme.colors.gray_600};
`;

export const OptionsContent = styled.View``;

export const Options = styled.FlatList``;

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

export const SelectedIcon = styled(MaterialIcons).attrs(props => ({
  size: props.theme.constants.iconSize,
  color: props.theme.colors.gray_600,
}))``;

export const OptionIcon = styled(MaterialIcons).attrs(props => ({
  size: props.theme.constants.iconSize,
  color: props.theme.colors.gray_600,
}))``;

export const CheckIcon = styled(MaterialIcons).attrs(props => ({
  name: 'check',
  size: props.theme.constants.iconSize,
  color: props.theme.colors.purple_700,
}))``;

export const OptionsFooter = styled.View`
  height: 50px;
`;
