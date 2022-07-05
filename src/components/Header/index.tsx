import React from 'react';
import { Container, Content, Title } from './styles';

type HeaderProps = {
  title: string;
};
export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
      </Content>
    </Container>
  );
};

export default Header;
