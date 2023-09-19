import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../firebase/FirebaseConfig';
import { ScreenButton } from "../screenButton/ScreenButton";

interface LoginButtonProps {
    email: string;
    password: string;
    onError: (errorMessage: string) => void;
}

export function LoginButton({ email, password, onError }: LoginButtonProps) {
    const auth = FIREBASE_AUTH;

    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        try {
            setLoading(true);
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    };

    const handleError = (error: any) => {
        switch (error.code) {
            case 'auth/invalid-email':
                onError('Invalid email, please check it and try again');
                break;
            case 'auth/weak-password':
            case 'auth/missing-password':
                onError('Password must have at least 6 characters');
                break;
            case 'auth/user-not-found':
                onError('The credentials do not correspond to a registered user');
                break;
            default:
                onError('Login failed. Please check your information and try again');
                break;
        }
    };

    return (
        <>
            <ScreenButton onPress={handleLogin} children="LOGIN" />
            {loading && <ActivityIndicator size="large" color="red" />}
        </>
    );
}