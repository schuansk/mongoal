import { MaskedTextInput } from 'react-native-mask-text';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-grow: 1;
`;

export const CurrencyTextInput = styled(MaskedTextInput)`
  background-color: ${props => props.theme.colors.gray_100};
  height: 50px;
  border-radius: 25px;
  padding: 0 20px;
  color: ${props => props.theme.colors.gray_600};
  font-size: 18px;
  font-weight: bold;
`;

export const TextInput = styled.TextInput`
  background-color: ${props => props.theme.colors.gray_100};
  height: 50px;
  border-radius: 25px;
  padding: 0 20px;
  color: ${props => props.theme.colors.gray_600};
  font-size: 18px;
  font-weight: bold;
`;
