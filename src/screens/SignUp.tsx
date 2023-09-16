import { Text, View, StyleSheet } from "react-native"
import { useForm, Controller } from "react-hook-form"

import { Alert } from "react-native";
import { InputName } from "../components/inputs/InputName";
import { InputPassword } from "../components/inputs/InputPassword";
import { InputEmail } from "../components/inputs/InputEmail";
import { ScreenTitle } from "../components/screenTitle/ScreenTitle";
import { ScreenButton } from "../components/screenButton/ScreenButton";
import { HelpLink } from "../components/helpLink/HelpLink";
import { SocialMedia } from "../components/socialMedia/socialMedia";
import { ScreenContainer } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function SignUp() {
    const navigation = useNavigation();

    const signUp = () => {
        Alert.alert('Registered', 'The account was succefully registered');
    };

    return (
        <ScreenContainer>
            <ScreenTitle children="Sign Up" />
            <InputName />
            <InputEmail />
            <InputPassword />
            <HelpLink onPress={() => navigation.navigate("Login")} children="Already have an account?"></HelpLink>
            <ScreenButton onPress={() => navigation.navigate("Login")} children="SIGN IN" />
            <SocialMedia children="Or sign up with social account" />
        </ScreenContainer>
    );
}


const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        marginTop: 106,
    },
    inputContainer: {
        marginTop: 62,
        justifyContent: "center",
        alignItems: "center",
    },
    centralizar: {
        marginTop: 32,
        justifyContent: "center",
        alignItems: "center"
    },
    direita: {
        marginTop: 16,
        marginRight: 16
    },
    centralize:  {
        alignItems: "center",
        justifyContent: "center"
    }
})