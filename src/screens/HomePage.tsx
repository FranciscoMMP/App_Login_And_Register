import { View, Text } from "react-native";
import { ScreenButton } from "../components/screenButton/ScreenButton";
import { FIREBASE_AUTH } from "../firebase/FirebaseConfig";
import { signOut } from "firebase/auth";
import { User } from "firebase/auth";
import { ScreenTitle } from "../components/screenTitle/ScreenTitle";
import { ScreenContainer } from "./styles";

export function HomePage() {
    const auth = FIREBASE_AUTH
    const user = auth.currentUser

    const handleSignOut = async () => {
        await signOut(auth)
    }


    return (
        <ScreenContainer>
            <ScreenTitle>Welcome {user?.displayName}</ScreenTitle>
            <ScreenButton onPress={handleSignOut} children="LOG OUT"/>
        </ScreenContainer>
    )
}