import { TextInput, View, StyleSheet, Text } from "react-native"
import React, {useContext} from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { Container, Input } from "./styles"

export function InputPassword() {
    return(
    <Container>
        <Input
            placeholder="Your Password"
        />
    </Container>    
    )
}
