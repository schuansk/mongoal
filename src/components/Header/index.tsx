import React from 'react';
import ActionButton from '../ActionButton';
import { ActionButtonContainer, Container, Content, Title } from './styles';

type HeaderProps = {
  title: string;
  onPress(): void;
};
export const Header: React.FC<HeaderProps> = ({ title, onPress }) => {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <ActionButtonContainer>
          <ActionButton light onPress={onPress} />
        </ActionButtonContainer>
      </Content>
    </Container>
  );
};

export default Header;
