import React, {useState} from "react";
import { Alert, ActivityIndicator } from "react-native";
import { HelpLink } from "../components/helpLink/HelpLink";
import { InputEmail } from "../components/inputs/InputEmail";
import { InputPassword } from "../components/inputs/InputPassword";
import { ScreenButton } from "../components/screenButton/ScreenButton";
import { ScreenTitle } from "../components/screenTitle/ScreenTitle";
import { ScreenContainer } from "./styles";
import { SocialMedia } from "../components/socialMedia/SocialMedia";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebase/FirebaseConfig";
import { useAuth } from "../contexts/AuthContext";


export function Login() {
    const navigation = useNavigation();

    const{email, setEmail, password, setPassword} = useAuth();
    const auth = FIREBASE_AUTH

    const [loading, setLoading] = useState(false);

    useFocusEffect(
        React.useCallback(() => {
            setEmail("")
            setPassword("")
        }, [])
    )

    const handleLogin = async () => {
        try{
            setLoading(true); 
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error: any) {
            switch (error.code) {
                case 'auth/invalid-email':
                    Alert.alert('Login Failed', 'Invalid email, please check it and try again')
                    break;
                case 'auth/weak-password':
                    Alert.alert('Login Failed', 'Password must have at least 6 characters')
                    break;
                case 'auth/missing-password':
                    Alert.alert('Login Failed', 'Password must have at least 6 characters')
                    break;
                case 'auth/user-not-found':
                    Alert.alert('Login Failed',
                    'The credentials do not correspond to a registered user')
                    break;
            }
        } finally {
            setLoading(false)
        }
    }

    function handleForgotPassword(){
        navigation.navigate("ForgotPassword" as never);
    }

    function handleNewAccount(){
        navigation.navigate("SignUp" as never)
    }

    return(
        <ScreenContainer>
            <ScreenTitle children="Login"/>
            <InputEmail/>
            <InputPassword/>
            <HelpLink onPress={handleForgotPassword} children="Forgot your password?"/>
            <HelpLink onPress={handleNewAccount}
            children="Not have an account yet?"/>
            <ScreenButton onPress={handleLogin} children="LOGIN" />
            {loading && <ActivityIndicator size="large" color="red" />}
            <SocialMedia>login</SocialMedia>
        </ScreenContainer>
    )
}