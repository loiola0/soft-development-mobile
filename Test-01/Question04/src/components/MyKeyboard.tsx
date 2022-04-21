import * as React from 'react';
import Button from './Button';
import {View,Text} from 'react-native';
import {Styles} from '../styles/GlobalStyles';
import { myColors } from '../styles/Colors';


export default function MyKeyboard(){
    const [firstNumber,setFirstNumber] = React.useState("");
    const [secondNumber,setsecondNumber] = React.useState("");
    const [operation,setOperation] = React.useState("");
    const [result,setResult] = React.useState<Number | null >(null);

    const handleNumberPress = (buttonValue: string) => {
        if(firstNumber.length < 10){
            setFirstNumber(firstNumber+buttonValue);
        }
    };

    const handleOperationPress = (buttonValue: string) => {
        setOperation(buttonValue);
        setsecondNumber(firstNumber);
        setFirstNumber("");
    };

    const clear = () => {
        setFirstNumber("");
        setsecondNumber("");
        setOperation("");
        setResult(null);
    }


    const firstNumberDisplay = () => {
        if(result != null){
            return <Text style={result < 99999 ? [Styles.screenFirstNumber, {color: myColors.result}]: [Styles.screenFirstNumber,{fontSize:50,color:myColors.result,}]}>{result?.toString()}</Text>
        }
        
        if(firstNumber === ""){
            return <Text style={Styles.screenFirstNumber}>{0}</Text>
        }

        if(firstNumber.length > 7){
            return(
                <Text style={[Styles.screenSecondNumber, {fontSize: 50}]}>
                    {firstNumber}
                </Text>
            );
        }
    };
        const getResult = () => {
            switch (operation){
                case "+":
                    clear();
                    setResult(parseFloat(secondNumber) + parseFloat(firstNumber));
                    break;
                case "-":
                    clear();
                    setResult(parseFloat(firstNumber) - parseFloat(secondNumber));
                    break;
                case "*":
                    clear();
                    setResult(parseFloat(firstNumber) * parseFloat(secondNumber));
                    break;
                case "/":
                    clear();
                    setResult(parseFloat(firstNumber) / parseFloat(secondNumber));
                    break;
                default:
                    clear();
                    setResult(0);
                    break;
            }
        };
    return (
        <View style={Styles.viewButtom}>
            <View
                style={{
                    height: 120,
                    width: "90%",
                    justifyContent: 'flex-end',
                    alignSelf: 'center'
                }}>
                    <Text style={Styles.screenSecondNumber}>
                        {secondNumber}
                        <Text style={{color: 'purple', fontSize: 50, fontWeight: '500'}}>{operation}</Text>
                    </Text>
                    {firstNumberDisplay()}
                </View>
                <View style={Styles.row}>
                    <Button title='C' onPress={clear}/>
                    <Button title='+/-' isGray onPress={() => handleOperationPress('+/-')}/>
                    <Button title='%' isGray onPress={()=> handleOperationPress('%')}/>
                    <Button title='/' isBlue onPress={()=> handleOperationPress('/')}/>
                </View>
                <View style={Styles.row}> 
                    <Button title='7' onPress={() => handleNumberPress('9')}/>
                    <Button title='8' onPress={() => handleNumberPress('8')}/>
                    <Button title='9' onPress={() => handleNumberPress('7')}/>
                    <Button title='x' onPress={() => handleOperationPress('*')}/>
                </View>
                <View style={Styles.row}> 
                    <Button title='4' onPress={() => handleNumberPress('4')}/>
                    <Button title='5' onPress={() => handleNumberPress('5')}/>
                    <Button title='6' onPress={() =>  handleNumberPress('6')}/>
                    <Button title='-' onPress={() => handleOperationPress('-')}/>
                </View>
                <View style={Styles.row}> 
                    <Button title='1' onPress={() => handleNumberPress('1')}/>
                    <Button title='2' onPress={() => handleNumberPress('2')}/>
                    <Button title='3' onPress={() => handleNumberPress('3')}/>
                    <Button title='+' isBlue onPress={()=> handleOperationPress('+')}/>
                </View>
                <View style={Styles.row}> 
                    <Button title='.' onPress={() => handleOperationPress('.')}/>
                    <Button title='0' onPress={() => handleOperationPress('0')}/>
                    <Button title='<-' isGray onPress={()=> setFirstNumber(firstNumber.slice(0, -1))}/>
                    <Button title='=' isBlue onPress={()=> getResult()}/>
                </View>
        </View>
    );
}
