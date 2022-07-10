import React from 'react';
import theme from '../../theme';
import ActionButton from '../ActionButton';
import { ActionButtonContainer, Container, Content, Title } from './styles';

type HeaderProps = {
  title: string;
  onPress(): void;
  background?: string[];
};
export const Header: React.FC<HeaderProps> = ({
  title,
  onPress,
  background,
}) => {
  return (
    <Container
      colors={background || [theme.colors.purple_700, theme.colors.red_600]}
    >
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
