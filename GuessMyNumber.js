import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, TextInput, FlatList } from 'react-native';

let num = Math.floor(Math.random() * 100) + 1;

function GuessMyNumber(props) {
    const [playerNumber, setPlayerNumber] = useState("");
    const [intentos, setIntentos] = useState([]);
    const [acertado, setAcertado] = useState(false);

    const handleTry = () => {
        let res = "El numero " + playerNumber;

        if(num > playerNumber) {
            res += " Se queda corto";
        }
        else if(num < playerNumber) {
            res += " Se Pasa";
        }
        else {
            res += " Es correcto";
            setAcertado(true);
        }

        if(Math.abs(num - playerNumber) <= 10 && num != playerNumber) {
            res += ", Pero esta muy cerca";
        }

        setIntentos([
            res,
            ...intentos,
        ])

        setPlayerNumber("");
    }

    const handleReset = () => {
        setPlayerNumber("");
        num = (Math.floor(Math.random() * 100) + 1);
        setIntentos([]);
        setAcertado(false);
    }

    return (
        <View style={styles.number}>
            <Text>Adivina un numero del 1 - 100</Text>
            <TextInput 
                autoFocus
                editable={(!acertado)}
                style={styles.input}
                placeholder="Numero"
                onChangeText={setPlayerNumber}
                value={playerNumber}
                keyboardType="number-pad"
            />
            {
                acertado ?
                <Button 
                    title="Volver a Jugar"
                    onPress={handleReset}
                />
                :
                <Button 
                    title="Intentar"
                    onPress={handleTry}
                />
            }
            <FlatList
                data = {intentos}
                renderItem = {({item}) => (<Text style = {acertado ? styles.itemAcertado : styles.item}>{item}</Text>)}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    number: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#03a9f4',
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

    item: {
        color: '#000',
        padding: 5,
        paddingHorizontal: 50,
        margin: 5,
        alignSelf: 'center',
        backgroundColor: '#4dd0e5',
    },

    itemAcertado: {
        color: '#fff',
        padding: 5,
        paddingHorizontal: 50,
        margin: 5,
        alignSelf: 'center',
        backgroundColor: '#0043ca',
    }
})

export default GuessMyNumber;