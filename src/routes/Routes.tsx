import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./AuthStack";
import { AppStack } from "./AppStack";
import { AuthProvider } from "../contexts/AuthContext";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { FIREBASE_AUTH } from "../firebase/FirebaseConfig";

export function Routes() {
    

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const auth = FIREBASE_AUTH;

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
              setUser(null);
            }
          });
      
          return () => unsubscribe();
        }, []);

    

    return (
            <AuthProvider>
                <NavigationContainer>
                    {user ? <AppStack /> : <AuthStack/>}
                 </NavigationContainer>
            </AuthProvider>
    )
}
