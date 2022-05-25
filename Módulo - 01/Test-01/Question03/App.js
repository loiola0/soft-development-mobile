import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View,TextInput,Text } from 'react-native';


export default function App() {
  const [text,setText] = useState("Welcome to App!");
  return (
    <View style={styles.container}>
        <TextInput
        label='text'
        placeholder='write something'
        style={[{color: "#870DFF"},styles.input]}
        onChangeText={text => setText(text)}
      />
      <Text>Text digited: {text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginBottom:100,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
