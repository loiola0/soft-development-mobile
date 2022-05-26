import {StyleSheet, Text, View, TextInput, Platform, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import BookItem  from './BookItem';
import {useState} from 'react';
 
export default function Search() {

    const [input, setInput] = useState('');
    const [books, setBooks] = useState([]);
  
    const handleSearch = () => {
        fetch(`https://hn.algolia.com/api/v1/search?query=${input}`)
       .then(response => response.json())
       .then(data =>setBooks(data.hits))
       .catch((err)=> console.log("Error!" + err))
  
    };

 return (
    <View>
        <Text style={styles.title}>Buscar livros</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite um nome"
                placeholderTextColor="#555"
                onChangeText={setInput}
            />
            <TouchableOpacity 
                style={styles.button}
                activeOpacity={0.1}
                onPress={handleSearch}
            >
            <Text style={styles.buttonText}>Pesquisar</Text>
            </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator={false}>
                {books && books.map((book) => {
                    return <BookItem  key={book.objectID} book={book}/>
                })}
        </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
    title: {
      color: 'black',
      fontSize: 22,
      marginBottom: 6,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    input: {
      backgroundColor: '#FFF0F5',
      fontSize: 18,
      borderRadius: 6,
      padding: Platform.OS == 'ios' ? 13 : 11,
      color: '#363636'
    },
    button: {
      backgroundColor: '#00FA9A',
      padding: 2,
      borderRadius: 20,
      alignItems: 'center',
      marginTop: 20,
      width: 200,
      height: 40,
      marginLeft: 60,
      marginBottom: 40,
    },
    buttonText: {
      color: '#FFF',
      fontSize: 17,
      fontWeight: 'bold',
      marginTop: 7,
    },
  });