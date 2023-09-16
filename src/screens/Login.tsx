import { Alert } from "react-native";
import { HelpLink } from "../components/helpLink/HelpLink";
import { InputEmail } from "../components/inputs/InputEmail";
import { InputPassword } from "../components/inputs/InputPassword";
import { ScreenButton } from "../components/screenButton/ScreenButton";
import { ScreenTitle } from "../components/screenTitle/ScreenTitle";
import { ScreenContainer } from "./styles";
import { SocialMedia } from "../components/socialMedia/socialMedia";
import { useNavigation } from "@react-navigation/native";

export function Login() {
    const navigation = useNavigation();

    const signUp = () => {
        Alert.alert('Registered', 'The account was succefully registered')
    }


    return(
        <ScreenContainer>
            <ScreenTitle children="Login"/>
            <InputEmail/>
            <InputPassword/>
            <HelpLink onPress={() => navigation.navigate("ForgotPassword")} children="Forgot your password?"/>
            <ScreenButton onPress={signUp} children="LOGIN" />
            <SocialMedia>Or login with social account</SocialMedia>
        </ScreenContainer>
    )
}