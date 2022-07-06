import React from 'react';
import ActionButton from '../ActionButton';
import { ActionButtonContainer, Container, Content, Title } from './styles';

type HeaderProps = {
  title: string;
};
export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <ActionButtonContainer>
          <ActionButton light />
        </ActionButtonContainer>
      </Content>
    </Container>
  );
};

export default Header;
