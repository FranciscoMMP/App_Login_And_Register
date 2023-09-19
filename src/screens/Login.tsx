import React from "react";
import { Alert} from "react-native";
import { HelpLink } from "../components/helpLink/HelpLink";
import { InputEmail } from "../components/inputs/InputEmail";
import { InputPassword } from "../components/inputs/InputPassword";
import { ScreenTitle } from "../components/screenTitle/ScreenTitle";
import { ScreenContainer } from "./styles";
import { SocialMedia } from "../components/socialMedia/SocialMedia";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useAuth } from "../contexts/AuthContext";
import { LoginButton } from "../components/authFunctions/LoginButton";


export function Login() {
    const navigation = useNavigation();

    const{email, setEmail, password, setPassword} = useAuth();

    useFocusEffect(
        React.useCallback(() => {
            setEmail("");
            setPassword("");
        }, [])
    );

    function handleForgotPassword(){
        navigation.navigate("ForgotPassword" as never);
    }

    function handleNewAccount(){
        navigation.navigate("SignUp" as never);
    }

    return(
        <ScreenContainer>
            <ScreenTitle children="Login"/>
            <InputEmail/>
            <InputPassword/>
            <HelpLink onPress={handleForgotPassword} children="Forgot your password?"/>
            <HelpLink onPress={handleNewAccount}
            children="Not have an account yet?"/>
            <LoginButton 
                email={email}
                password={password}
                onError={(errorMessage) => {
                    Alert.alert('Sign Up Failed', errorMessage);
                }}/>
            <SocialMedia>login</SocialMedia>
        </ScreenContainer>
    )
}