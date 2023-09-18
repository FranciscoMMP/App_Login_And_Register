import { ScreenContainer } from "./styles";
import { ScreenTitle } from "../components/screenTitle/ScreenTitle";
import { InputEmail } from "../components/inputs/InputEmail";
import { ScreenButton } from "../components/screenButton/ScreenButton";
import { InstructionForgotPassword } from "../components/instructionForgotPassword/InstructionForgotPassword";
import { FIREBASE_AUTH } from "../firebase/FirebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";
import { useAuth } from "../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";

export function ForgotPassword () {
    const navigation = useNavigation();

    const {email, setEmail} = useAuth();
    const auth = FIREBASE_AUTH;

    const handleForgotPassword = async () => {
        try {
            await sendPasswordResetEmail(auth, email)
            alert('Password reset email sent')
            setEmail("")
            navigation.navigate("Login" as never)
        } catch (error: any) {
            alert('Error: ' + error.message)
        }
    }

    return(
    <ScreenContainer>
        <ScreenTitle children="Forgot Password" />
        <InstructionForgotPassword />
        <InputEmail />
        <ScreenButton onPress={handleForgotPassword} children="SEND" />
    </ScreenContainer>
    )
}