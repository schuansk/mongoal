import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

interface IconContainerProps {
  backgroundColor: string;
}

interface TransactionValueProps {
  deposit?: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconContainer = styled.View<IconContainerProps>`
  background: ${props => props.backgroundColor};
  height: 32px;
  width: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const Icon = styled(MaterialIcons).attrs(props => ({
  color: props.theme.colors.white,
  size: props.theme.constants.iconSize,
}))``;

export const Description = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Details = styled.View`
  margin-left: 10px;
`;

export const AccountName = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.colors.gray_600};
`;

export const CategoryName = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colors.gray_600};
  font-weight: bold;
`;

export const TransactionDate = styled.Text`
  font-size: 10px;
  color: ${props => props.theme.colors.gray_600};
`;

export const TransactionValue = styled.Text<TransactionValueProps>`
  font-size: 20px;
  color: ${props =>
    props.deposit ? props.theme.colors.gray_600 : props.theme.colors.red_600};
  font-weight: bold;
`;
