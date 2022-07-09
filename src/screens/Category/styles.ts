import { MaterialIcons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { AnyStyledComponent } from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
`;

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

export const CreateCategoryButton = styled(
  RectButton as unknown as AnyStyledComponent,
)`
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
