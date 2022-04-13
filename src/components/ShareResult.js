import { View, Text, TouchableOpacity, Share } from 'react-native';
import formStyles from '../../assets/styles/formStyle';
function ShareResult({imc}){
    const share = async () => {
        try{
            const result = await Share.share({
                message: `Meu IMC hoje vale ${imc}.`
            });
        }catch(e){
            alert(e.message);
        }
    };
    return (
        <View style={formStyles.boxShareButton}>
            <TouchableOpacity style={formStyles.shared} onPress={share}>
                <Text style={formStyles.sharedText}>Share</Text>
            </TouchableOpacity>
        </View>
    ); 
}

export default ShareResult;