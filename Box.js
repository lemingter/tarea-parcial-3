import React from 'react';
import {Button, Text, View, Image, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Box({title, image}) {

    const navigation = useNavigation();
    
    return (
        <View style={styles.box}>
            <Image source={{uri: image}}
                style={{width: 158, height: 100, borderTopLeftRadius: 15, borderTopRightRadius: 15,}} 
            />

            <Text style={styles.boxText}>{title}</Text>
            <Button
                title="Jugar" 
                style={{paddingBottom: 3,}}
                onPress={() => navigation.navigate(title)}/> 
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        width:160,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: '#4dd0e1',
        margin: 10,
        borderRadius: 16,
    },

    boxText: {
        color: "darkslategray",
        fontWeight: "bold",
        padding: 8,
    },
})

export default Box;