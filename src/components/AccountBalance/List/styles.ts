import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';
import AccountModel from '../../../database/models/accountModel';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.white};
  margin-top: -40px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: 20px 30px 0 30px;
  elevation: ${props => props.theme.constants.elevation};
`;

export const Content = styled(FlatList as new () => FlatList<AccountModel>)<
  FlatListProps<AccountModel>
>``;

export const RowSeparator = styled.View`
  height: 1px;
  background-color: ${props => props.theme.colors.gray_100};
`;

export const ListFooter = styled.View`
  height: 60px;
`;
