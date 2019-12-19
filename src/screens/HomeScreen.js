import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';



const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go To Components Demo"/>
      <Button
        onPress={() => navigation.navigate('List')}
        title="Go To list Demo"/>
        <Button
          onPress={() => navigation.navigate('Image')}
          title="Go To Image Screen"/>
        <Button
          onPress={() => navigation.navigate('Counter')}
          title="Go To Counter Screen"/>
        <Button
          onPress={() => navigation.navigate('Colour')}
          title="Go To Colour Screen"/>
        <Button
          onPress={() => navigation.navigate('Square')}
          title="Go To Square Screen"/>
    </View>
    );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 45
  }
});

export default HomeScreen;
