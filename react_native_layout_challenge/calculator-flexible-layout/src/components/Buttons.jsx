import React,{useState} from   'react';
import {Text,View} from 'react-native';
import { styles } from '../styles/MyStyles';
import ButtonsNumber from './ButtonsNumber';
import ButtonsOperation from './ButtonsOperation';


export default function Buttons(){
    const [display,setDisplay] = useState('');
    const [result,setResult] = useState('');

    handleOp = (op) => {
        if(op==='C'){
          setDisplay('');
          setResult('');
        }else if(op=== '='){
            setDisplay(result);
            setResult('');
        }else{
            setDisplay(display+op);
            let resultTemp = result;
            try {
                let fixedOperaction = display.split('x').join('*')
                fixedOperaction = fixedOperaction.split('÷').join('/')
                fixedOperaction = fixedOperaction.split(',').join('.')
                resultTemp = new String(eval(fixedOperaction)).toString()
              }catch(e){}
             
            setDisplay(display);
            setResult(result);
        }
    }
    return(
        <View style={styles.container}>
                <Text style={styles.display}>{display} </Text>
                <Text style={styles.result}>{result}</Text>
            <View style={styles.buttons}>
                <ButtonsNumber/>
                <ButtonsOperation/>          
            </View>    
        </View> 
    );
}