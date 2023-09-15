import { TextInput, View, StyleSheet, Text } from "react-native"
import React, {useContext} from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { Container, Input } from "./styles"

export function InputEmail() {
    return(
    <Container>
        <Input
            placeholder="Your Email"
        />
    </Container>    
    )
}

const styles = StyleSheet.create({
    input: {
        marginVertical: 4,
        height: 64,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#FFFFFF',
        width: 343,
    },
})