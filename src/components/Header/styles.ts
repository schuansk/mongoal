import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled(LinearGradient).attrs(props => ({
  colors: [props.theme.colors.purple_700, props.theme.colors.red_600],
  start: { x: 0.0, y: 1.0 },
  end: { x: 1.0, y: 1.0 },
}))`
  height: 160px;
`;

export const Content = styled.View`
  margin-top: 40px;
`;

export const Title = styled.Text`
  font-size: 36px;
  color: ${props => props.theme.colors.white};
  margin-left: 40px;
  font-weight: bold;
`;

export const ActionButtonContainer = styled.View`
  position: absolute;
  right: 40px;
`;
