import React from 'react';
import { Container, TextInput } from './styles';

type InputProps = {
  placeholder: string;
  callback(categoryName: string): void;
};

const Input: React.FC<InputProps> = ({ placeholder, callback }) => {
  return (
    <Container>
      <TextInput
        placeholder={placeholder}
        onChangeText={value => callback(value)}
      />
    </Container>
  );
};

export default Input;
