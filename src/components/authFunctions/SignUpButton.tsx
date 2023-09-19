import React, { useState } from "react";
import { Alert, ActivityIndicator } from "react-native";
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { FIREBASE_AUTH, UPDATEUSER } from '../../firebase/FirebaseConfig';
import { ScreenButton } from "../screenButton/ScreenButton";

interface SignUpButtonProps {
    email: string;
    name: string;
    password: string;
    onSuccess: () => void;
    onError: (errorMessage: string) => void;
}

export function SignUpButton({ email, name, password, onSuccess, onError }: SignUpButtonProps) {
    const auth = FIREBASE_AUTH;

    const [loading, setLoading] = useState(false);

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

                signOut(auth);
                onSuccess();
                Alert.alert('Done!', 'Account successfully registered');
            } else {
                onError('Name should be at least 3 characters long');
            }
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
            case 'auth/email-already-in-use':
                onError('Email is already in use');
                break;
            case 'auth/weak-password':
                onError('Password must have at least 6 characters');
                break;
            case 'auth/missing-password':
                onError('Password must have at least 6 characters');
                break;
            default:
                onError('Please check your information and try again');
                break;
        }
    };

    return (
        <>
            <ScreenButton onPress={handleSignUp} children="SIGN UP" />
            {loading && <ActivityIndicator size="large" color="red" />}
        </>
    );
}
