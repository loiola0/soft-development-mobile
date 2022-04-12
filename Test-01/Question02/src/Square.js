import react from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const Square = () => {
    return (
    <View style={styles.container}>
        <View style={[styles.square, {backgroundColor:'blue'}]}><Text>Square 1</Text></View>
        <View style={[styles.square, {backgroundColor:'green'}]}><Text>Square 2</Text></View>
        <View style={[styles.square, {backgroundColor:'red'}]}><Text>Square 3</Text></View>
    </View>
  );
}

export default Square;

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row"
    },
    square: {
      width: 100,
      height: 100,
      margin: 10,
      alignItems: "center",
      justifyContent: "center",
    }
  });