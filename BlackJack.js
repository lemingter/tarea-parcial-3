import React, { useState } from 'react';
import { Button, FlatList, Text, View, StyleSheet } from 'react-native';

function BlackJack(props) {
    const [playerHand, setPlayerHand] = useState([]);
    const [playerStatus, setPlayerStatus] = useState("");
    const [playerMoney, setPlayerMoney] = useState(500);
    const [moneyInPLay, setMoneyInPLay] = useState(0);
    const [dealerHand, setDealerHand] = useState(0);
    const [playing, setPaying] = useState(false);
    const [endGame, setEndGame] = useState(false);

    const startPlaying = (num) => {
        if(num <= playerMoney) {
            setPaying(true);
            setEndGame(false);
            setPlayerStatus("");
            setPlayerHand([
                Math.floor((Math.random() * 10) + 1), 
                Math.floor((Math.random() * 10) + 1)
            ])
            setMoneyInPLay(num);
            calculatePlayerStatus();
            setPlayerMoney(playerMoney - num);
            setDealerHand(0);
        }
    }

    const calculatePlayerStatus = () => {
        if((playerHand[0] === 1 && playerHand[1] === 10) || (playerHand[1] === 1 && playerHand[0] === 10)) {
            setPlayerStatus("Ganaste");
            setEndGame(true);
            setPlayerMoney(playerMoney + moneyInPLay * 2);
        }
        else{
            var res = 0;
            for (let i = 0; i < playerHand.length; i++) {
                res += playerHand[i];
                
            }
            if(res == 21) {
                setPlayerStatus("Ganaste");
                setEndGame(true);
                setPlayerMoney(playerMoney + moneyInPLay * 2);
            }
            else if(res > 21) {
                setPlayerStatus("Perdiste");
                setEndGame(true);
            }
        }
    }

    const addCard = () => {
        setPlayerHand([
            ...playerHand,
            Math.floor((Math.random() * 10) + 1),
        ])
        calculatePlayerStatus();
    }

    const dealerTurn = () => {
        setDealerHand(Math.floor((Math.random() * 21) + 1));

        var res = 0;
        for (let i = 0; i < playerHand.length; i++) {
            res += playerHand[i];
            
        }

        if(dealerHand < res) {
            setPlayerStatus("Ganaste");
            setEndGame(true);
            setPlayerMoney(playerMoney + moneyInPLay * 2);
        }
        else {
            setPlayerStatus("Perdiste");
            setEndGame(true);
        }
    }

    const resetGame = () => {
        setPaying(false);
    }

    return (
        <View style={styles.BlackJack}>
            <Text style={styles.title}>Fondos: {playerMoney}</Text>
            {
                playing ?
                    endGame ?
                    <View>
                        <Text>{playerStatus}</Text>
                        <Button title="Volver a Jugar" onPress={resetGame} />
                    </View>
                    :
                    <View>
                        <View style = {styles.buttons}>
                            <Button title="Otra carta" onPress={addCard} />
                            <Button title="Terminar" onPress={dealerTurn} />
                        </View>
                        <Text style={styles.subTitle}>Tu mano es:</Text>
                        <FlatList 
                            data = {playerHand}
                            renderItem = {({item}) => (<Text style={styles.item}>{item}</Text>)}
                        />
                    </View>
                :
                <View>
                    <Button 
                        title = "100"
                        onPress={() => startPlaying(100)}
                        color = "black" 
                    />
                    <Button 
                        title = "200"
                        onPress={() => startPlaying(200)}
                        color = "black" 
                    />
                    <Button 
                        title = "300"
                        onPress={() => startPlaying(300)}
                        color = "black" 
                    />
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    BlackJack: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#03a9f4',
    },

    title: {
        fontSize: 25,
        padding: 20,
    },

    subTitle: {
        fontSize: 20,
        alignSelf: 'center',
    },

    buttons: {
        flexDirection: 'row',
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
})

export default BlackJack;