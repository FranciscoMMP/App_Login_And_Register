import React from "react";
import { ScreenContainer } from "./styles";
import { ScreenTitle } from "../components/screenTitle/ScreenTitle";
import { InputEmail } from "../components/inputs/InputEmail";
import { ScreenButton } from "../components/screenButton/ScreenButton";
import { InstructionForgotPassword } from "../components/instructionForgotPassword/InstructionForgotPassword";
import { FIREBASE_AUTH } from "../firebase/FirebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";
import { useAuth } from "../contexts/AuthContext";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Alert } from "react-native";

export function ForgotPassword () {
    const navigation = useNavigation();

    const {email, setEmail} = useAuth();
    const auth = FIREBASE_AUTH;

    useFocusEffect(
        React.useCallback(() => {
            setEmail("")
        }, [])
    )

    const handleSendPasswordResetEmail = async () => {
        try {
            await sendPasswordResetEmail(auth, email)
            Alert.alert('Done!', 'Password reset email sent')
            navigation.navigate("Login" as never)
        } catch (error: any) {
            Alert.alert('Error: ', error.message)
        }
    }

    return(
    <ScreenContainer>
        <ScreenTitle children="Forgot Password" />
        <InstructionForgotPassword />
        <InputEmail />
        <ScreenButton onPress={handleSendPasswordResetEmail} children="SEND" />
    </ScreenContainer>
    )
}