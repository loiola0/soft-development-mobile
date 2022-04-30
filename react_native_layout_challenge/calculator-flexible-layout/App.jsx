import React,{useState,Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Switch,SafeAreaView,TouchableOpacity} from 'react-native';
import ButtonsNumber from './src/components/ButtonsNumber';
import ButtonsOperation from './src/components/ButtonsOperation';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: '',
      result: ''
    }
  }

  handleOp = (op) => {
    if(op==='C'){
      this.setState({
        display: '',
        result: ''
      })
    }else if(op=== '=') {
      this.setState({
        display: this.state.result,
        result: ''
      })
    }else {
      const display = this.state.display+op
      let result = this.state.result
      try {
        let fixedOperaction = display.split('x').join('*')
        fixedOperaction = fixedOperaction.split('÷').join('/')
        fixedOperaction = fixedOperaction.split(',').join('.')
        result = new String(eval(fixedOperaction)).toString()
      }catch(e){}
    
    this.setState({
      display,
      result
    })
  }
}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.display}>{ this.state.display } </Text>
        <Text style={styles.result}>{ this.state.result }</Text>
        <View style={styles.buttons}>
          <ButtonsNumber/>
          <ButtonsOperation/>          
        </View>    
      </View>             
    );
  }
}

const styles = StyleSheet.create({
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
 
});