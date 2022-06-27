import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, FlatList } from 'react-native';

function GuessYourNumber(props) {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const [intentos, setIntentos] = useState([]);
    const [acertado, setAcertado] = useState(false);

    const handleMinor = () => {
        setIntentos([
            min + Math.floor((max - min) / 2),
            ...intentos,
        ])
        setMax(min + Math.floor((max - min) / 2));
    }

    const handleMajor = () => {
        setIntentos([
            min + Math.floor((max - min) / 2),
            ...intentos,
        ]);
        setMin(min + Math.floor((max - min) / 2));
    }

    const handleReset = () => {
        setMin(0);
        setMax(100);
        setIntentos([]);
        setAcertado(false);
    }

    return (
        <View style={styles.number}>
            <Text style={styles.title}>Adivinare tu numero</Text>
            <Text style={styles.subTitle}>Acaso tu numero es:</Text>
            <Text style={styles.numberText}>{min + Math.floor((max - min) / 2)}</Text>
            
            {
                acertado ?
                <View>
                    <Text>Felicidades encontramos tu numero</Text>
                    <Button 
                        title="Jugar de nuevo"
                        onPress={handleReset}
                    />
                </View>
                :
                <View style={styles.buttons}>
                    <Button 
                        title="Menor"
                        onPress={handleMinor}
                    />
                    <Button 
                        title="Correcto"
                        onPress={() => setAcertado(true)}
                    />
                    <Button 
                        title="Mayor"
                        onPress={handleMajor}
                    />
                </View>
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

    title: {
        fontSize: 25,
    },

    subTitle: {
        fontSize: 20,
    },

    numberText: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    buttons: {
        flexDirection: 'row',
        padding: 10,
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

export default GuessYourNumber;