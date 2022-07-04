import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Content, Title } from './styles';

type HeaderProps = {
  title: string;
};
export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Content>
        <Title>{title}</Title>
      </Content>
    </Container>
  );
};

export default Header;
