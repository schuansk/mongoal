import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
`;

export const ModalContent = styled.View`
  padding: 10px;
`;

export const ModalSection = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;

export const MonetarySumbol = styled.Text`
  color: ${props => props.theme.colors.gray_600};
  font-weight: bold;
  font-size: 18px;
  margin-right: 15px;
`;
