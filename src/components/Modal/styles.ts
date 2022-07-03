import { MaterialIcons } from '@expo/vector-icons';
import RNModal from 'react-native-modal';
import styled from 'styled-components/native';

interface ContentProps {
  height: number;
}

export const Container = styled(RNModal)`
  justify-content: flex-end;
  margin: 0;
`;

export const Content = styled.View<ContentProps>`
  flex: ${props => props.height};
  background-color: ${props => props.theme.colors.white};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 10px 10px 0 10px;
`;

export const Header = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const CloseModalButton = styled.TouchableOpacity.attrs(props => ({
  activeOpacity: props.theme.constants.buttonActiveOpacity,
}))``;

export const CloseIcon = styled(MaterialIcons).attrs(props => ({
  name: 'close',
  color: props.theme.colors.gray_100,
  size: props.theme.constants.iconSize,
}))``;

export const Body = styled.View``;
