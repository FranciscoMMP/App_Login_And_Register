import React from 'react';
import { Container, Input } from './styles';
import { useName } from '../../contexts/NameContext'; // Importe o contexto NameContext

export function InputName() {
  const { name, setName, isNameValid, validateName, nameErrorMessage } = useName();

  const handleChangeName = (text: string) => {
    setName(text);
  };

  const handleBlurName = () => {
    validateName(); // Valida o nome ao sair do campo
  };

  return (
    <Container>
      <Input
        placeholder="Your Name"
        value={name}
        onChangeText={handleChangeName}
        onBlur={handleBlurName}
        style={{
          borderColor: isNameValid ? '#ccc' : 'red',
          paddingRight: isNameValid ? 30 : 0,
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

