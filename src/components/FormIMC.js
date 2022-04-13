import { TextInput, View, Text, Button } from "react-native";
import { useState } from 'react';
import IMCInputs from './IMCInputs';
import formStyles from "../../assets/styles/formStyle";
import ShareResult from "./ShareResult";
function ImcForm(){
    const [imc, setIMC] = useState(null);
    const [info, setInfo] = useState('');
    return (
        <View style={formStyles.containerForm}>
            <IMCInputs setIMC={setIMC} setInfo={setInfo} />
            {imc === null && <></>}
            {imc !== null && <ShareResult imc={imc} />}
            <View style={formStyles.resultIMC}>
                <Text style={formStyles.information}>{info}</Text>
                <Text style={formStyles.informationValue}>{imc}</Text>
            </View>
        </View>
    );
}

export default ImcForm;