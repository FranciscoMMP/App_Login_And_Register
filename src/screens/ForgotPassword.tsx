import React from "react";
import { ScreenContainer } from "./styles";
import { ScreenTitle } from "../components/screenTitle/ScreenTitle";
import { InputEmail } from "../components/inputs/InputEmail";
import { InstructionForgotPassword } from "../components/instructionForgotPassword/InstructionForgotPassword";
import { useAuth } from "../contexts/AuthContext";
import { useFocusEffect } from "@react-navigation/native";
import { ForgotPasswordButton } from "../components/authFunctions/ForgotPasswordButton";

export function ForgotPassword () {

    const {email, setEmail} = useAuth();

    useFocusEffect(
        React.useCallback(() => {
            setEmail("");
        }, [])
    );

    return(
    <ScreenContainer>
        <ScreenTitle children="Forgot Password" />
        <InstructionForgotPassword />
        <InputEmail />
        <ForgotPasswordButton
        email={email} />
    </ScreenContainer>
    )
}