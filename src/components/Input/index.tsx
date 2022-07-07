import React from 'react';
import { Container, TextInput } from './styles';

type InputProps = {
  placeholder: string;
};

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <Container>
      <TextInput placeholder={placeholder} />
    </Container>
  );
};

export default Input;
