import { View, Text, StyleSheet } from "react-native"
import { ScreenName } from "./styles"

interface ScreeTitleProps {
    children: string;
}

export function ScreenTitle({children}: ScreeTitleProps) {
    return(
        <View>
            <ScreenName>{children}</ScreenName>
        </View>
    )
}