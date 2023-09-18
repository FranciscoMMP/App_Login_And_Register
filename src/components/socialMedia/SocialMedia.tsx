import { ButtonSocialMedia, Container, ContainerSocialMedia, LogoSocialMedia, TextAboveSocialMedia } from "./styles";

interface TextAboveSocialMediaProps {
    children: string;
}

const facebookImg = require("../../assets/img/facebookLogo.png")
const googleImg = require("../../assets/img/googleLogo.png")

export function SocialMedia({children} : TextAboveSocialMediaProps) {

    return (
        <Container>
            <TextAboveSocialMedia>Or {children} with social account</TextAboveSocialMedia>
            <ContainerSocialMedia>
                <ButtonSocialMedia>
                    <LogoSocialMedia source={googleImg}></LogoSocialMedia>
                </ButtonSocialMedia>
                <ButtonSocialMedia>
                    <LogoSocialMedia source={facebookImg}></LogoSocialMedia>
                </ButtonSocialMedia>
            </ContainerSocialMedia>
        </Container>
    )
}