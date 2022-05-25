import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Square from './src/Square';


export default function App() {
  return (
    <View style={styles.container}>
      <Square color="blue" square_number="1"/>
      <Square color="green" square_number="2"/>
      <Square color="red" square_number="3"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
  },
});
