import React from 'react';
import { KeyboardTypeOptions } from 'react-native';
import { Container, TextInput } from './styles';

type InputProps = {
  placeholder: string;
  callback(categoryName: string): void;
  defaultValue?: string;
  keyboardType?: KeyboardTypeOptions;
};

const Input: React.FC<InputProps> = ({
  placeholder,
  defaultValue,
  callback,
  keyboardType,
}) => {
  return (
    <Container>
      <TextInput
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChangeText={value => callback(value)}
        keyboardType={keyboardType || 'default'}
      />
    </Container>
  );
};

export default Input;
