import React from "react";
import { Alert } from "react-native";
import { InputName } from "../components/inputs/InputName";
import { InputPassword } from "../components/inputs/InputPassword";
import { InputEmail } from "../components/inputs/InputEmail";
import { ScreenTitle } from "../components/screenTitle/ScreenTitle";
import { ScreenButton } from "../components/screenButton/ScreenButton";
import { HelpLink } from "../components/helpLink/HelpLink";
import { SocialMedia } from "../components/socialMedia/SocialMedia";
import { ScreenContainer } from "./styles";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { FIREBASE_AUTH, UPDATEUSER } from '../firebase/FirebaseConfig';
import { useAuth } from "../contexts/AuthContext";

export function SignUp() {
    const navigation = useNavigation();

    const {email, setEmail, name, setName, password, setPassword} = useAuth();
    const auth = FIREBASE_AUTH;

    useFocusEffect(
        React.useCallback(() => {
            setName("")
            setEmail("")
            setPassword("")
        }, [])
    )

    const handleSignUp = async () => {
        try {
            if(name.length >= 3){    
                const response = await createUserWithEmailAndPassword(auth, email, password);
                const user = response.user;
                
                if (user) {
                    UPDATEUSER(user, {
                    displayName: name
                    });
                }
                
                await signOut(auth)
                Alert.alert('Done!', 'Account succefully registered')
                navigation.navigate("Login" as never);
            } else{
                Alert.alert('Sign Up Failed', 'Name should be at least 3 characters long')
            }
            } catch (error: any) {
                Alert.alert('Sign Up failed: ', error.message);
            }
        };

    function handleAlreadyHaveAccount(){
        navigation.navigate("Login" as never)
    }

    return (
        <ScreenContainer>
            <ScreenTitle children="Sign Up" />
            <InputName />
            <InputEmail />
            <InputPassword />
            <HelpLink onPress={handleAlreadyHaveAccount} children="Already have an account?"></HelpLink>
            <ScreenButton onPress={handleSignUp} children="SIGN UP" />
            <SocialMedia children="sign up" />
        </ScreenContainer>
    );
}