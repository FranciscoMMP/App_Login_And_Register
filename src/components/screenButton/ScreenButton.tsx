import { TouchableOpacityProps } from "react-native";
import { Container, ContainerText } from "./styles";

interface ScreenButtonProps extends TouchableOpacityProps {
    children: string;
}

export function ScreenButton({children, ...rest}: ScreenButtonProps ){
    return(
        <Container {...rest}>
            <ContainerText>{children}</ContainerText>
        </Container>
    )
}