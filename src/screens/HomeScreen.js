import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';



const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Luke1</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go To Components Demo"/>
      <Button
        onPress={() => navigation.navigate('List')}
        title="Go To list Demo"/>
        <Button
          onPress={() => navigation.navigate('Image')}
          title="Go To Image Screen"/>
    </View>
    );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 45
  }
});

export default HomeScreen;
