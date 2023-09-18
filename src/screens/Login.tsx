import React from "react";
import { Alert } from "react-native";
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

    useFocusEffect(
        React.useCallback(() => {
            setEmail("")
            setPassword("")
        }, [])
    )

    const handleLogin = async () => {
        try{
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error: any) {
            Alert.alert('Login failed: ', error.message)
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
            <SocialMedia>login</SocialMedia>
        </ScreenContainer>
    )
}