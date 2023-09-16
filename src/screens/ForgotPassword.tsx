import { View, Text } from "react-native";
import { ScreenContainer } from "./styles";
import { ScreenTitle } from "../components/screenTitle/ScreenTitle";
import { InputEmail } from "../components/inputs/InputEmail";
import { ScreenButton } from "../components/screenButton/ScreenButton";
import { InstructionForgotPassword } from "../components/instructionForgotPassword/InstructionForgotPassword";

export function ForgotPassword () {
    return(
    <ScreenContainer>
        <ScreenTitle children="Forgot Password" />
        <InstructionForgotPassword />
        <InputEmail />
        <ScreenButton children="SEND" />
    </ScreenContainer>
    )
}