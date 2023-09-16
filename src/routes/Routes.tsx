import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./AuthStack";
import { AppStack } from "./AppStack";
import { EmailProvider } from "../contexts/EmailContext";

export function Routes() {
        const auth = true;
    return (
        <EmailProvider>
            <NavigationContainer>
                {auth ? <AuthStack /> : <AppStack />}
            </NavigationContainer>
        </EmailProvider>
    )
}
