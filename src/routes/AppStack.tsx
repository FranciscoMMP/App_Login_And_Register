import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomePage } from '../screens/HomePage';

const Stack = createNativeStackNavigator();

export function AppStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='HomePage' component={HomePage}/>
        </Stack.Navigator>
    )
}