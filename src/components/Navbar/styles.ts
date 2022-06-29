import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AnyStyledComponent } from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 55px;
  background: ${props => props.theme.colors.white};
`;

export const Action = styled.TouchableOpacity``;

export const DashboardIcon = styled(
  MaterialCommunityIcons as unknown as AnyStyledComponent,
).attrs(props => ({
  name: 'view-dashboard',
  size: props.theme.constants.iconSize,
}))``;
