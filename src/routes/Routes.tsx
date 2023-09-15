import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./AuthStack";
import { AppStack } from "./AppStack";

export function Routes() {
        const auth = true;
    return (
        <NavigationContainer>
            {auth ? <AuthStack /> : <AppStack />}
        </NavigationContainer>
    )
}
