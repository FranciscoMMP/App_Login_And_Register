import { TextInput, View, StyleSheet, Text } from "react-native"
import React, {useContext} from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { Container, Input } from "./styles"

export function InputName() {
    return(
    <Container>
        <Input
            placeholder="Your Name"
        />
    </Container>    
    )
}
