import React from 'react';
import { KeyboardTypeOptions } from 'react-native';
import { Container, CurrencyTextInput, TextInput } from './styles';

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
  const currencyMask = '[000].[000],[000]';
  return (
    <Container>
      {keyboardType === 'numeric' ? (
        <CurrencyTextInput
          value={defaultValue}
          placeholder={placeholder}
          type="currency"
          options={{
            decimalSeparator: ',',
            groupSeparator: '.',
            precision: 2,
          }}
          onChangeText={(_, extracted) => callback(extracted)}
          mask={currencyMask}
          keyboardType="numeric"
        />
      ) : (
        <TextInput
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChangeText={value => callback(value)}
          keyboardType={keyboardType || 'default'}
        />
      )}
    </Container>
  );
};

export default Input;
