import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';
import Box from './Box';

function GamesScreen(props) {

    const navigation = useNavigation();

    return (
        <View>
            <Text>Games</Text>
            <Button title="Guess My Number" onPress={() => navigation.navigate('Guess My Number')} />
            <Button title="Guess Your Number" onPress={() => navigation.navigate('Guess Your Number')} />
            <Button title="Jan Ken Pon" onPress={() => navigation.navigate('Jan Ken Pon')} />
        </View>
    );
}

export default GamesScreen;