import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.white};
  margin-top: 80px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: 20px 30px 0 30px;
  elevation: ${props => props.theme.constants.elevation};
`;

export const Content = styled.View``;
