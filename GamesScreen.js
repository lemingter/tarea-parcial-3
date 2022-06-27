import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Box from './Box';
import Items from './Items';

function GamesScreen(props) {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.containerBoxes}>
                    {
                        Items.map((task, i) => (
                            <Box 
                                key = {i}
                                title={task.title}
                                image={task.image}
                            />
                        ))
                    }
                </View>
            </ScrollView>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#03a9f4',
    },

    containerBoxes: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})

export default GamesScreen;