import React, { useState} from 'react';
import { Text } from 'react-native';
import { Container, Input } from './styles';
import { useAuth } from '../../contexts/AuthContext';
import { useFocusEffect } from '@react-navigation/native';

export function InputEmail() {


    const {email, setEmail} = useAuth();
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [isValidationPerformed, setIsValidationPerformed] = useState(false);

    useFocusEffect(
        React.useCallback(() => {
            setIsValidationPerformed(false)
        }, [])
    )

    const isEmailValid = (email: string) => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailPattern.test(email);
    };

    const validateEmail = () => {
        const valid = isEmailValid(email);
        setIsValid(valid);
        if (!valid) {
        setErrorMessage('Not a valid email address. Should be your@email.com');
        } else {
        setErrorMessage('');
        }
        setIsValidationPerformed(true);
    };

    const handleChangeEmail = (text: string) => {
        setEmail(text);
        setIsValidationPerformed(false);
    };

    const handleBlurEmail = () => {
        validateEmail();
    };

    return (
        <Container>
        <Input
            placeholder="Email"
            value={email}
            autoCapitalize='none'
            onChangeText={handleChangeEmail}
            onBlur={handleBlurEmail}
            style={{
            borderColor: isValidationPerformed ? (isValid ? '#2AA952' : '#F01F0E') : '#fff',
            }}
        />
        {isValid || !isValidationPerformed ? null : (
            <Text style={{ color: '#F01F0E', marginLeft: 20, marginRight: 20 }}>
            {errorMessage}
            </Text>
        )}
        </Container>
    );
}

