import React, { useState } from 'react';
import { Text } from 'react-native';
import { Container, Input } from './styles';
import { useEmail } from '../../contexts/EmailContext';

export function InputEmail() {
  const { email, setEmail, isValid, validateEmail, errorMessage } = useEmail();
  const [isValidationPerformed, setIsValidationPerformed] = useState(false);

  const handleChangeEmail = (text: string) => {
    setEmail(text);
    setIsValidationPerformed(false); // Reinicia a validação quando o email é alterado
  };

  const handleBlurEmail = () => {
    validateEmail();
    setIsValidationPerformed(true); // Marca que a validação foi realizada após a primeira vez
  };

  return (
    <Container>
      <Input
        placeholder="Your Email"
        value={email}
        onChangeText={handleChangeEmail}
        onBlur={handleBlurEmail}
        style={{
          borderColor: isValidationPerformed ? (isValid ? '#2AA952' : 'red') : '#fff',
        }} // Estiliza a borda com base na validação após a primeira validação
      />
      {isValid || !isValidationPerformed ? null : (
        <Text style={{ color: '#F01F0E', marginLeft: 20, marginRight: 20 }}>
          {errorMessage}
        </Text>
      )}
    </Container>
  );
}
