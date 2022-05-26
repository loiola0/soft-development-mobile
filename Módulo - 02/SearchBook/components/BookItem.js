import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function BookItem({ book }){
  return(
    <View style={styles.content}>
      <View style={styles.wraper}>
        <Text style={styles.item}>
          Autor: {book.author}
        </Text>
      </View>
      <View style={styles.wraper}>
        <Text style={styles.item}>
          Título: {book.title}
        </Text>
      </View>
      <View style={styles.wraper}>
        <Text style={styles.item}>Link: {book.url}</Text>
      </View>
    </View> 
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#D8BFD8',
    marginTop: 20,
    padding: 15,
    borderRadius: 5,
    borderColor: 'black'
  },
  wraper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  item: {
    color: '#fff',
  },
});