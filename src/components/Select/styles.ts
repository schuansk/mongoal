import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const CurrentSelection = styled.TouchableOpacity.attrs(props => ({
  activeOpacity: props.theme.constants.buttonActiveOpacity,
}))``;

export const CurrentSelectionTitle = styled.Text`
  color: ${props => props.theme.colors.gray_600};
  font-size: 18px;
  font-weight: bold;
`;

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

export const GoBackItem = styled(MaterialIcons).attrs(props => ({
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

export const SelectedItem = styled(MaterialIcons).attrs(props => ({
  size: props.theme.constants.iconSize,
  color: props.theme.colors.gray_600,
}))``;

export const OptionsFooter = styled.View`
  height: 50px;
`;
