import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NameContextProps {
  name: string;
  setName: (name: string) => void;
  isNameValid: boolean;
  nameErrorMessage: string;
}

const NameContext = createContext<NameContextProps | undefined>(undefined);

interface NameProviderProps {
  children: ReactNode;
}

export const useName = (): NameContextProps => {
  const context = useContext(NameContext);
  if (!context) {
    throw new Error('useName must be used within a NameProvider');
  }
  return context;
};

export const NameProvider: React.FC<NameProviderProps> = ({ children }) => {
  const [name, setName] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [nameErrorMessage, setNameErrorMessage] = useState('');

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
    return valid;
  };

  return (
    <NameContext.Provider
      value={{
        name,
        setName,
        isNameValid,
        validateName,
        nameErrorMessage,
      }}
    >
      {children}
    </NameContext.Provider>
  );
};
