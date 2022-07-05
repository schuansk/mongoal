import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs(props => ({
  activeOpacity: props.theme.constants.buttonActiveOpacity,
}))`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

export const IconContainer = styled.View`
  background: ${props => props.theme.colors.gray_100};
  height: 32px;
  width: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const Icon = styled(MaterialIcons).attrs(props => ({
  color: props.theme.colors.gray_600,
  size: props.theme.constants.iconSize,
}))``;

export const Description = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Details = styled.View`
  margin-left: 10px;
`;

export const CategoryName = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colors.gray_600};
  font-weight: bold;
`;

export const ActionIcon = styled(MaterialIcons).attrs(props => ({
  name: 'keyboard-arrow-right',
  color: props.theme.colors.gray_600,
  size: props.theme.constants.iconSize,
}))``;
