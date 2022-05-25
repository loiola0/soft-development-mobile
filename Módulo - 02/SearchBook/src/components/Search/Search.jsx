import react from 'react';
import {} from 'react-native';

export default function Search(){
    return(
        <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "digite o livro que deseja pesquisar"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
    );
}