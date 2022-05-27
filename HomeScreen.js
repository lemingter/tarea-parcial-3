import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function HomeScreen(props) {
    return (
        <View style = {styles}>
            <Text>Esta es la Home screen</Text>
            <Text>No hay mucho que mostrar aqui pase a los juegos por fabor</Text>
            <Image source={{uri: "https://www.paragatitos.com/wp-content/uploads/gato-llorando.jpg"}}
                    style={{width: 350, height: 250, marginTop: 50,}} />
        </View>
    );
}

const styles = StyleSheet.create({
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
})

export default HomeScreen;

