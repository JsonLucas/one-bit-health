import { View, Text, TextInput, TouchableOpacity, Vibration } from 'react-native';
import { useState } from 'react';
import formStyles from '../../assets/styles/formStyle';
function IMCInputs({ setIMC, setInfo, setImcList }) {
    const [altura, setAltura] = useState(null);
    const [massa, setMassa] = useState(null);
    const [textButton, setTextButton] = useState('Calcular IMC');
    const [errorMessage, setErrorMessage] = useState(null);
    function calculaIMC() {
        if ((altura === null) || (massa === null)) {
            setTextButton('Calcular IMC');
            setErrorMessage('Campo obrigatório*');
            Vibration.vibrate();
        } else {
            setErrorMessage(null);
            let massaFormat = massa.replace(',', '.');
            let alturaFormat = altura.replace(',', '.');
            let info = '';
            const imc = (Math.abs(massaFormat) / Math.pow(Math.abs(alturaFormat), 2));
            if (imc < 18.5) {
                info = 'Magreza';
            }
            else if ((imc >= 18.5) && (imc < 25)) {
                info = 'Normal';
            }
            else if ((imc >= 25) && (imc < 30)) {
                info = 'Sobrepeso';
            }
            else if ((imc >= 30) && (imc < 40)) {
                info = 'Obesidade moderada';
            }
            else if (imc >= 40) {
                info = 'Obesidade grave';
            }
            setIMC(imc.toFixed(2));
            setInfo(info);
            setImcList((arr) => [...arr, {id: new Date().getTime(), imc: imc.toFixed(2), info: info}]);
            setAltura(null);
            setMassa(null);
            setTextButton('Recalcular');
        }
    }
    return (
        <View style={formStyles.form}>
            <Text style={formStyles.labels}>Altura</Text>
            <Text style={formStyles.errorMessage}>{errorMessage}</Text>
            <TextInput style={formStyles.inputs} value={altura}
                placeholder='Digite sua altura em m. ex.: 1.75' keyboardType="numeric" onChangeText={setAltura} />
            <Text style={formStyles.labels}>Massa</Text>
            <Text style={formStyles.errorMessage}>{errorMessage}</Text>
            <TextInput style={formStyles.inputs} value={massa}
                placeholder='Digite sua massa em kg. ex.: 75.135' keyboardType="numeric" onChangeText={setMassa} />
            <TouchableOpacity style={formStyles.button} onPress={() => { calculaIMC() }}>
                <Text style={formStyles.textButton}>{textButton}</Text>
            </TouchableOpacity>
        </View>
    );
}
export default IMCInputs;