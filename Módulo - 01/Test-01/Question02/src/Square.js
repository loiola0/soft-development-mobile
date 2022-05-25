import react from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const Square = (props) => {
    const {color,square_number} = props
    return (
        <View style={[styles.square, {backgroundColor:`${color}`}]}><Text>Square {square_number}</Text></View>
    );
}

export default Square;

const styles = StyleSheet.create({
    square: {
      width: 100,
      height: 100,
      margin: 10,
      alignItems: "center",
      justifyContent: "center",
    }
  });