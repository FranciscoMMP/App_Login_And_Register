import React, { useState } from "react";
import { Alert, ActivityIndicator } from "react-native";
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

    const { email, setEmail, name, setName, password, setPassword } = useAuth();
    const auth = FIREBASE_AUTH;

    const [loading, setLoading] = useState(false);

    useFocusEffect(
        React.useCallback(() => {
            setName("")
            setEmail("")
            setPassword("")
        }, [])
    )

    const handleSignUp = async () => {
        try {
            setLoading(true); 

            if (name.length >= 3) {
                const response = await createUserWithEmailAndPassword(auth, email, password);
                const user = response.user;

                if (user) {
                    UPDATEUSER(user, {
                        displayName: name
                    });
                }

                await signOut(auth)
                Alert.alert('Done!', 'Account successfully registered')
                handleAlreadyHaveAccount();
            } else {
                Alert.alert('Sign Up Failed', 'Name should be at least 3 characters long')
            }
        } catch (error: any) {
            switch (error.code) {
                case 'auth/invalid-email':
                    Alert.alert('Sign Up Failed', 'Invalid email, please check it and try again')
                    break;
                case 'auth/email-already-in-use':
                    Alert.alert('Sign Up Failed', 'Email is already in use')
                case 'auth/weak-password':
                    Alert.alert('Sign Up Failed', 'Password must have at least 6 characters')
                default:
                    Alert.alert('Sign Up Failed', 'Please check your informations and try again')
                    break;
            }
        } finally {
            setLoading(false);
        }
    };

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
            <ScreenButton onPress={handleSignUp} children="SIGN UP" />
            {loading && <ActivityIndicator size="large" color="red" />}
            <SocialMedia children="sign up" />
        </ScreenContainer>
    );
}
