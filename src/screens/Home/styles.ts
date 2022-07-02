import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View``;

export const Header = styled(LinearGradient).attrs(props => ({
  colors: [props.theme.colors.purple_700, props.theme.colors.red_600],
}))`
  width: 100%;
  height: 200px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  elevation: ${props => props.theme.constants.elevation};
`;

export const CurrentBalance = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
`;
