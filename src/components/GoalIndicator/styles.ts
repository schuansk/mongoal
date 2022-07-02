import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styled, { css } from 'styled-components/native';

interface GoalPercentageProps {
  width: number;
}

export const Container = styled.View`
  flex: 1;
  position: absolute;
  left: 50%;
`;

export const Content = styled.View`
  position: relative;
  width: 340px;
  height: 140px;
  top: 120px;
  left: -50%;
  padding: 20px;
  border-radius: 40px;
  background: ${props => props.theme.colors.white};
  elevation: ${props => props.theme.constants.elevation};
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.gray_600};
  font-size: 18px;
  font-weight: 500;
`;

export const GoalPercentageContainer = styled.View`
  width: 300px;
  height: 40px;
  background: ${props => props.theme.colors.gray_100};
  border-radius: 20px;
`;

export const GoalPercentage = styled(LinearGradient).attrs(props => ({
  colors: [props.theme.colors.purple_700, props.theme.colors.gray_100],
  start: { x: 0, y: 1 },
  end: { x: 1, y: 1 },
}))<GoalPercentageProps>`
  width: ${props => `${props.width}px`};
  height: 40px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  ${props =>
    props.width >= 240 &&
    css`
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    `};
`;

export const GoalValueContainer = styled.TouchableOpacity.attrs(props => ({
  activeOpacity: props.theme.constants.buttonActiveOpacity,
}))`
  flex-direction: row;
  justify-content: center;
`;

export const GoalValue = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.colors.purple_700};
  font-weight: 500;
`;

export const EditIcon = styled(MaterialIcons).attrs(props => ({
  name: 'edit',
  color: props.theme.colors.purple_700,
  size: props.theme.constants.iconSize,
}))``;
