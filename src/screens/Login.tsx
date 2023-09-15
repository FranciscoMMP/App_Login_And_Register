import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native'
import { useState } from 'react'
import { FIREBASE_AUTH, UPDATEUSER } from '../firebase/FirebaseConfig';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
        }catch (error: any) {
            alert('Sign in failed: ' + error.message);
        } finally {
            setLoading(false)
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password).then(() => {
                const user = getAuth().currentUser;
              
                if (user) {
                  UPDATEUSER(user, {
                    displayName: name
                  });
                }
              });
            console.log(response)
            alert('DEU CERTO')
        } catch (error: any){
            alert('Sign Up failed: ' + error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='padding'>
                <TextInput
                style={styles.input}
                placeholder='Nome'
                autoCapitalize='none'
                onChangeText={(text) => setName(text)} 
                />
                <TextInput
                style={styles.input}
                placeholder='Email'
                autoCapitalize='none'
                onChangeText={(text) => setEmail(text)} 
                />
                <TextInput
                secureTextEntry={true}
                style={styles.input}
                placeholder='Password'
                autoCapitalize='none'
                onChangeText={(text) => setPassword(text)} 
                />
                {loading ? (
                <ActivityIndicator size={'large'} color={'#0000ff'}/>
                ) : ( <>
                    <Button title='Login' onPress={() => signIn()} />
                    <Button title='Create Account' onPress={() => signUp()}/>
                </>
                )}
             </KeyboardAvoidingView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    }
})