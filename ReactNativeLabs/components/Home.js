import {useState} from "react";
import {ImageBackground, StyleSheet, Text, View} from "react-native";
import MainList from "./mainList";
import {StatusBar} from "expo-status-bar";

const image = {uri: "https://images.unsplash.com/photo-1632350456639-a723ba8b342f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=594&q=80 "}
export default function Home({navigation}) {

    const [cars, setCars] = useState([
        {
            id: 1,
            title: 'Pace-HSE',
            description:"some text here to descripe that awsome car",
            image: 'https://www.ccarprice.com/products/Jaguar-I-Pace-HSE-2023_1.jpg'

        },
        {
            id: 2,
            title: 'Pace_P250',
            description:"some text here to descripe that awsome car",
            image: 'https://www.ccarprice.com/products/thumb/Jaguar_E-Pace_P250_2023.jpg'
        },
        {
            id: 3,
            title: 'Pace_EV400',
            description:"some text here to descripe that awsome car",
            image: 'https://www.ccarprice.com/products/thumb/Jaguar_I_Pace_EV400_2022_1.jpg'
        }, {
            id: 4,
            title: 'P300 Coupe 2023',
            description:"some text here to describe that awesome car",
            image: 'https://www.ccarprice.com/products/thumb/Jaguar_F_Type_P300_Coupe_2023_1.jpg'
        },
    ]);

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.title}>Cars App</Text>

                <MainList CARS={cars}/>
                <StatusBar style="auto"/>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4086cb',

    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    title: {
        paddingTop: 30,
        paddingLeft: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'left'
    },
});
