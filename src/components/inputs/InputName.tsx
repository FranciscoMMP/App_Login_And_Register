import React, { useState } from 'react';
import { Text } from 'react-native';
import { Container, Input } from './styles';
import { useAuth } from '../../contexts/AuthContext';

export function InputName() {
  const {name, setName} = useAuth();
  const [isNameValid, setIsNameValid] = useState(true);
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [isValidationPerformed, setIsValidationPerformed] = useState(false);

  const isNameValidFn = (name: string) => {
    return name.length >= 3;
  };

  const validateName = () => {
    const valid = isNameValidFn(name);
    setIsNameValid(valid);
    if (!valid) {
      setNameErrorMessage('Name should be at least 3 characters long');
    } else {
      setNameErrorMessage('');
    }
    setIsValidationPerformed(true);
  };

  const handleChangeName = (text: string) => {
    setName(text);
    setIsValidationPerformed(false);
  };

  const handleBlurName = () => {
    validateName();
  };

  return (
    <Container>
      <Input
        placeholder="Name"
        value={name}
        onChangeText={handleChangeName}
        onBlur={handleBlurName}
        style={{
          borderColor: isValidationPerformed ? (isNameValid ? '#2AA952' : 'red') : '#fff',
        }}
      />
      {!isNameValid && (
        <Text style={{ color: '#F01F0E', marginLeft: 20, marginRight: 20 }}>
          {nameErrorMessage}
        </Text>
      )}
    </Container>
  );
}