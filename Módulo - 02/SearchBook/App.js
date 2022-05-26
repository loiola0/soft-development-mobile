import { StyleSheet, Text, View, TextInput, Platform, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import Search from './components/Search';


export default function App() {
  return (
    <View style={styles.container}>
      <Search/>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    paddingVertical: 60,
    paddingHorizontal: 40,
  }
});