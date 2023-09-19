import React, { useState } from "react";
import { Alert, ActivityIndicator } from "react-native";
import { sendPasswordResetEmail } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../firebase/FirebaseConfig';
import { ScreenButton } from "../screenButton/ScreenButton";
import { useNavigation } from "@react-navigation/native";

interface PasswordResetButtonProps {
    email: string;
}

export function ForgotPasswordButton({ email }: PasswordResetButtonProps) {
    const auth = FIREBASE_AUTH;

    const navigation = useNavigation();

    const [loading, setLoading] = useState(false);

    const handleSendPasswordResetEmail = async () => {
        try {
            setLoading(true);
            await sendPasswordResetEmail(auth, email);
            Alert.alert('Done!', 'Password reset email sent');
            navigation.navigate("Login" as never)
        } catch (error) {
            handleError();
        } finally {
            setLoading(false);
        }
    };

    const handleError = () => {
        Alert.alert('Invalid Email', 'Please check it and try again');
    };

    return (
        <>
            <ScreenButton onPress={handleSendPasswordResetEmail} children="Send Reset Email" />
            {loading && <ActivityIndicator size="large" color="red" />}
        </>
    );
}