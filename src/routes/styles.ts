import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.white};
`;

export const Loader = styled(ActivityIndicator).attrs(props => ({
  size: 'large',
  color: props.theme.colors.purple_700,
}))``;
