import React from "react";
import { Alert } from "react-native";
import { InputName } from "../components/inputs/InputName";
import { InputPassword } from "../components/inputs/InputPassword";
import { InputEmail } from "../components/inputs/InputEmail";
import { ScreenTitle } from "../components/screenTitle/ScreenTitle";
import { HelpLink } from "../components/helpLink/HelpLink";
import { SocialMedia } from "../components/socialMedia/SocialMedia";
import { ScreenContainer } from "./styles";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useAuth } from "../contexts/AuthContext";
import { SignUpButton } from "../components/authFunctions/SignUpButton";

export function SignUp() {
    const navigation = useNavigation();

    const { email, setEmail, name, setName, password, setPassword } = useAuth();

    useFocusEffect(
        React.useCallback(() => {
            setName("");
            setEmail("");
            setPassword("");
        }, [])
    );

    function handleAlreadyHaveAccount() {
        navigation.navigate("Login" as never)
    }

    return (
        <ScreenContainer>
            <ScreenTitle children="Sign Up" />
            <InputName />
            <InputEmail />
            <InputPassword />
            <HelpLink onPress={handleAlreadyHaveAccount} children="Already have an account?"></HelpLink>
            <SignUpButton
                email={email}
                name={name}
                password={password}
                onSuccess={() => {
                navigation.navigate("Login" as never);
                }}
                onError={(errorMessage) => {
                    Alert.alert('Sign Up Failed', errorMessage);
                }}
            />
            <SocialMedia children="sign up" />
        </ScreenContainer>
    );
}
