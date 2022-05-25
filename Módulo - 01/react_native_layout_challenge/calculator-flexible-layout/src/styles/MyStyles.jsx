import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: '#F5FCFF',
    },
    display: {
      flex: 1,
      backgroundColor: '#efefef',
      fontSize: 70,
      textAlign: 'right',
      paddingTop: 30,
      paddingRight: 10
    },
    result: {
      flex: 0.4,
      backgroundColor: '#efefef',
      fontSize: 30,
      textAlign: 'right',
      paddingRight: 10,
      paddingBottom: 10
    },
    buttons: {
      flex: 5,
      flexDirection: 'row',
    },
    col1: {
      flex: 3,
      backgroundColor: '#1f1f1f'
    },
    line: {
      flexDirection: 'row',
      flex: 1
    },
    btn: {
      flex: 1,
      justifyContent: 'center'
    },
    btnText: {
      textAlign: 'center',
      fontSize: 50,
      color: 'white'
  
    },
    col2: {
      flex: 1,
      backgroundColor: '#0a0a0a'
    },
  })