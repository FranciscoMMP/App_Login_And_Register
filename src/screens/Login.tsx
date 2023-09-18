import { Alert } from "react-native";
import { HelpLink } from "../components/helpLink/HelpLink";
import { InputEmail } from "../components/inputs/InputEmail";
import { InputPassword } from "../components/inputs/InputPassword";
import { ScreenButton } from "../components/screenButton/ScreenButton";
import { ScreenTitle } from "../components/screenTitle/ScreenTitle";
import { ScreenContainer } from "./styles";
import { SocialMedia } from "../components/socialMedia/SocialMedia";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebase/FirebaseConfig";
import { useAuth } from "../contexts/AuthContext";


export function Login() {
    const navigation = useNavigation();

    const{email, setEmail, password, setPassword} = useAuth();
    const auth = FIREBASE_AUTH

    const handleLogin = async () => {
        try{
            await signInWithEmailAndPassword(auth, email, password)
            setEmail("");
            setPassword("");
        } catch (error: any) {
            alert('Login failed: ' + error.message)
        }
    }

    return(
        <ScreenContainer>
            <ScreenTitle children="Login"/>
            <InputEmail/>
            <InputPassword/>
            <HelpLink onPress={() => navigation.navigate("ForgotPassword" as never)} children="Forgot your password?"/>
            <HelpLink onPress={() => navigation.navigate("SignUp" as never)}
            children="Does not have an account yet?"/>
            <ScreenButton onPress={handleLogin} children="LOGIN" />
            <SocialMedia>login</SocialMedia>
        </ScreenContainer>
    )
}