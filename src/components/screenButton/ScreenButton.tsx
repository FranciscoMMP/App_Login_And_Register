import { Container, ContainerText } from "./styles";

interface ScreenButtonProps {
    children: string;
    onPress: () => void;
}

export function ScreenButton({children, onPress}: ScreenButtonProps ){
    return(
        <Container onPress={onPress}>
            <ContainerText>{children}</ContainerText>
        </Container>
    )
}