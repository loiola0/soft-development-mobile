import React from "react";
import {Text,View,TouchableOpacity} from 'react-native';
import {styles} from '../styles/MyStyles';

export default function ButtonsOperation(){
    const col2Buttons = ['C', '÷', 'x', '-', '+']
    return(
        <View style={styles.col2}>
            { col2Buttons.map( op => <TouchableOpacity key={op} style={styles.btn} onPress={() => this.handleOp(op)}>
              <Text  style={styles.btnText}>
                {op}
              </Text>
            </TouchableOpacity> )}                
          </View>
    );
}