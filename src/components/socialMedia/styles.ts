import {styled} from "styled-components/native";

export const Container = styled.View`
    margin-top: 615px;
    margin-left: 110px;
    margin-right: 110px;
    width: 200px;
    justify-content: center;
    align-items: center;
    position: absolute
`

export const TextAboveSocialMedia = styled.Text`
    font-weight: bold;
    font-size: 14px;
`

export const ContainerSocialMedia = styled.View`
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`

export const ButtonSocialMedia = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 92px;
    height: 64px;
    background-color: white;
    elevation: 2;
    border-radius: 24px;
    margin-left: 8px;
    margin-right: 8px;
`

export const LogoSocialMedia = styled.Image`
    width: 24px;
    height: 24px;
`