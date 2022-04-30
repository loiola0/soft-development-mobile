import React from 'react'
import {Text,View,TouchableOpacity} from 'react-native';
import {styles} from '../styles/MyStyles';


export default function ButtonsNumber(){
    const col1Buttons = [
        ['7', '8', '9'],
        ['4', '5', '6'],
        ['1', '2', '3'],
        [',', '0', '=']
      ]

    return(
        <View style={styles.col1}> 
            { col1Buttons.map( (line, ind) => <View  key={ind} style={styles.line}>                     
              { line.map( (op) => <TouchableOpacity key={op} style={styles.btn} onPress={() => this.handleOp(op)}>
                <Text  style={styles.btnText}>
                  {op}
                </Text>
              </TouchableOpacity> )}                
            </View> )}
          </View>
    );
}
