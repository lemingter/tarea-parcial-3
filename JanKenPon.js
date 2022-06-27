import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

function JanKenPon() {
    const [playerWins, setPlayerWins] = useState(0);
    const [machineWins, setMachineWins] = useState(0);
    const [resultados, setResultados] = useState([]);

    const Play = () => {
        const res = Math.floor(Math.random() * 3);

        if(res === 0) {
            setPlayerWins(playerWins + 1);
            setResultados([
                "Jugador Gana",
                ...resultados,
            ]);
        }
        else if(res === 1) {
            setMachineWins(machineWins + 1);
            setResultados([
                "Jugador Pierde",
                ...resultados,
            ]);
        }
        else if(res === 2) {
            setResultados([
                "Empate",
                ...resultados,
            ]);
        }
    }

    const resetGame = () => {
        setResultados([]);
        setMachineWins(0);
        setPlayerWins(0);
    }

    return (
        <View style={styles.janKenPon}>
            <Text style={styles.title}>Puntuaje</Text>
            <Text style={styles.subTitle}>Jugador: {playerWins} - Maquina: {machineWins}</Text>

            {
                machineWins >= 3 || playerWins >= 3 ?
                <View style = {styles.endcard}>
                    {
                        playerWins >= 3 ?
                        <Text style={styles.title}>Ganaste</Text>
                        :
                        <Text style={styles.title}>Perdiste</Text>
                    }
                    <Button title="Volver a jugar" onPress={resetGame}/>
                </View>
                :
                <View style={styles.buttons}>
                    <TouchableOpacity onPress={Play}>
                        <Image 
                            source = {{uri: "https://redisain.com/wp-content/uploads/2020/04/ventajas-piedra-natural-1.jpg"}}
                            style={styles.image}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={Play}>
                        <Image 
                            source = {{uri: "https://www.eogsa.com/wp-content/uploads/2017/02/papel-1080x675.jpg"}}
                            style={styles.image}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={Play}>
                        <Image 
                            source = {{uri: "https://elcasopabloblog.files.wordpress.com/2018/01/tijera.jpg"}}
                            style={styles.image}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>
                </View>
            }

            <FlatList 
                data = {resultados}
                renderItem = {({item}) => (<Text style = {styles.item}>{item}</Text>)}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    janKenPon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#03a9f4',
    },

    title: {
        fontSize: 25,
        margin: 10,
    },

    subTitle: {
        fontSize: 20,
    },

    endcard: {
        alignItems: 'center',
        margin: 10,
    },

    buttons: {
        flexDirection: 'row',
        padding: 10,
    },

    image: {
        width: 100,
        height: 100,
    },

    item: {
        color: '#000',
        padding: 5,
        paddingHorizontal: 50,
        margin: 5,
        alignSelf: 'center',
        backgroundColor: '#4dd0e5',
    },

});

export default JanKenPon;