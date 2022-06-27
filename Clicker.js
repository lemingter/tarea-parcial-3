import React, { useState }from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

function Clicker(props) {
    const [number, setNumber] = useState(0);
    const [power, setPower] = useState(0);

    const addToNumber = () => {
        setNumber(number + Math.pow(5, power));
        if(number >= Math.pow(100, (power + 1))) {
            setPower(power + 1);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.subTitle}>Button Clicker</Text>
            <Text style={styles.title}>{number}</Text>
            <Button color="#000" title="Clicame" onPress={addToNumber} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#03a9f4',
    },

    title: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 20,
    },

    subTitle: {
        fontSize: 35,
        margin: 10,
    },
});

export default Clicker;