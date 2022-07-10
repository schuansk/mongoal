import React from 'react';
import { Container, TextInput } from './styles';

type InputProps = {
  placeholder: string;
  callback(categoryName: string): void;
  defaultValue?: string;
};

const Input: React.FC<InputProps> = ({
  placeholder,
  defaultValue,
  callback,
}) => {
  return (
    <Container>
      <TextInput
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChangeText={value => callback(value)}
      />
    </Container>
  );
};

export default Input;
