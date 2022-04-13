import { View, Text } from 'react-native';
import titleStyle from '../../assets/styles/titleStyle';
function Title(){
    return (
        <View style={titleStyle.box}>
            <Text style={titleStyle.title}>One Bit Health</Text>
        </View>
    );
}

export default Title;