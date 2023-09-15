import React, { createContext, useState } from "react";

interface AuthData {
    email : string,
    password : string,
    name: string;
  }
  
  // Defina um valor inicial com a estrutura definida pela interface
  const initialAuthData: AuthData = {
    email: "",
    password: "",
    name: "",
  };
  
  export const AuthContext = createContext<AuthData>(initialAuthData);
  

function AuthProvider({children}: {children: React.ReactNode}) {
    const [email, setEmail] = useState({});
    const [password, setPassword] = useState({});
    const [name, setName] = useState({});


    return(
        <AuthContext.Provider value={{ name, password }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;