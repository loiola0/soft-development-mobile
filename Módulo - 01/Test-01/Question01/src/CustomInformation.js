import react from "react";
import {Text} from 'react-native';


const CustomInformation = (props) => {
    const {counter} = props;
    return (
        <Text>You've pressed the button: {counter} time(s)</Text>
    );
}

export default CustomInformation;



