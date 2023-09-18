import React, { useState } from 'react';
import { Text } from 'react-native';
import { Container, Input } from './styles';
import { useAuth } from '../../contexts/AuthContext';

export function InputPassword() {
  const {password, setPassword} = useAuth();
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [isValidationPerformed, setIsValidationPerformed] = useState(false);

  const isPasswordValidFn = (password: string) => {
    return password.length >= 6;
  };

  const validatePassword = () => {
    const valid = isPasswordValidFn(password);
    setIsPasswordValid(valid);
    if (!valid) {
      setPasswordErrorMessage('Password should be at least 6 characters long');
    } else {
      setPasswordErrorMessage('');
    }
    setIsValidationPerformed(true);
  };

  const handleChangePassword = (text: string) => {
    setPassword(text);
    setIsValidationPerformed(false);
  };

  const handleBlurPassword = () => {
    validatePassword();
  };

  return (
    <Container>
      <Input
        placeholder="Password"
        value={password}
        onChangeText={handleChangePassword}
        onBlur={handleBlurPassword}
        secureTextEntry={true}
        autoCapitalize='none'
        style={{
          borderColor: isValidationPerformed ? (isPasswordValid ? '#2AA952' : 'red') : '#fff',
        }}
      />
      {!isPasswordValid && (
        <Text style={{ color: '#F01F0E', marginLeft: 20, marginRight: 20 }}>
          {passwordErrorMessage}
        </Text>
      )}
    </Container>
  );
}
