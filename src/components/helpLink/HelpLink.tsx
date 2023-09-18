import { ArrowImg, Container, ContainerImg, ContainerRow, PageToRedirect } from "./styles";
const arrowImg = require("../../assets/img/redRightArrow.png")

interface HelpLinkProps {
    children: string;
    onPress: () => void;
}

export function HelpLink({children, onPress}: HelpLinkProps){
    return(
        <Container>
            <ContainerRow>
                <PageToRedirect onPress={onPress}>{children}</PageToRedirect>  
                <ContainerImg>
                    <ArrowImg source={arrowImg}></ArrowImg>
                </ContainerImg>
          </ContainerRow>
        </Container>
    )
}