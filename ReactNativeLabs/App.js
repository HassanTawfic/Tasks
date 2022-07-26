import {StatusBar} from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from "./components/Home";
import Details from "./components/details";

export default function App() {
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={'Home'}
                    component={Home}
                    options={{ title: 'All-cars' }}
                />
                <Stack.Screen name="Details"  component={Details}
                              options={{ title: 'car-details ' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})


