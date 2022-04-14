import { TextInput, View, Text, Button, FlatList, ScrollView } from "react-native";
import { useState } from 'react';
import IMCInputs from './IMCInputs';
import formStyles from "../../assets/styles/formStyle";
import ShareResult from "./ShareResult";
function ImcForm(){
    const [imc, setIMC] = useState(null);
    const [info, setInfo] = useState('');
    const [imcList, setImcList] = useState([]);
    return (
        <View style={formStyles.containerForm}>
            <IMCInputs setIMC={setIMC} setInfo={setInfo} setImcList={setImcList} />
            <View style={formStyles.resultIMC}>
                <Text style={formStyles.information}>{info}</Text>
                <Text style={formStyles.informationValue}>{imc}</Text>
            </View>
            {imc === null && <></>}
            {imc !== null && <ShareResult imc={imc} />}
            {imcList.length === 0 && <></>}
            {imcList.length > 0 && 
            <View style={formStyles.historyIndex}>
                <Text style={formStyles.textHistoryIndex}>Histórico</Text>
            </View>}
            <FlatList style={formStyles.listImc} data={imcList.reverse()} 
            scrollEnabled={true} renderItem={(item) => 
                <Text style={formStyles.textItemList}>IMC: {item.item.imc} - {item.item.info}</Text>
            } keyExtractor={(item) => item.id} />
        </View>
    );
}

export default ImcForm;