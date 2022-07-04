import styled from 'styled-components/native';

export const Container = styled.View``;

export const Content = styled.View`
  margin-top: 40px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: ${props => props.theme.colors.gray_600};
  margin-left: 40px;
  font-weight: bold;
`;
