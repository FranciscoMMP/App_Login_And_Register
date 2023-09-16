import React, { createContext, useContext, useState, ReactNode } from 'react';

interface EmailContextProps {
  email: string;
  setEmail: (email: string) => void;
  isValid: boolean;
  errorMessage: string;
  validateEmail: () => boolean;
}

const EmailContext = createContext<EmailContextProps | undefined>(undefined);

interface EmailProviderProps {
  children: ReactNode;
}

export const useEmail = (): EmailContextProps => {
  const context = useContext(EmailContext);
  if (!context) {
    throw new Error('useEmail must be used within an EmailProvider');
  }
  return context;
};

export const EmailProvider: React.FC<EmailProviderProps> = ({ children }) => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

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
    return valid;
  };

  return (
    <EmailContext.Provider value={{ email, setEmail, isValid, errorMessage, validateEmail }}>
      {children}
    </EmailContext.Provider>
  );
};
