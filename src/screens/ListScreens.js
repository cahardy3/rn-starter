import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Jim', age: 10},
        {name: 'Dim', age: 11},
        {name: 'Lim', age: 12},
        {name: 'Bim', age: 13},
        {name: 'Rim', age: 14},
        {name: 'Mim', age: 15},
        {name: 'Sim', age: 16},
    ];
    return (
        <FlatList
        keyExtractor={friend => friend.name }
        data={friends} 
        renderItem = {({ item }) => {
            return <Text style={styles.textSyle}>{item.name + ' - Age ' + item.age }</Text>
        }}
    />
    )
};



const styles = StyleSheet.create({
    textSyle: {
        marginVertical: 50
    }
});

export default ListScreen;

