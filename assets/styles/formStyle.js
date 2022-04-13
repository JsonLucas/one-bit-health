import { StyleSheet } from "react-native";

const formStyles = StyleSheet.create({
    containerForm: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-around',
        bottom: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 20,
        paddingTop: 15
    },
    form: {
        width: '100%',
        height: 'auto',
        marginTop: 30,
        padding: 10
    },
    labels: {
        color: 'black',
        fontSize: 18,
        paddingLeft: 20
    },
    inputs: {
        width: '90%',
        borderRadius: 25,
        backgroundColor: '#f6f6f6',
        height: 40,
        margin: 12,
        paddingLeft: 10
    },
    button: {
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#ff0043',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30
    },
    textButton: {
        color: '#fff',
        fontSize: 20
    }, 
    resultIMC: {
        flex: 1,
        marginTop: 15,
        borderRadius: 50,
        alignItems: 'center',
        width: '100%'
    },
    information: {
        fontSize: 20,
        color: '#ff0043',
        fontWeight: 'bold'
    },
    informationValue: {
        fontSize: 48,
        color: '#ff0043',
        fontWeight: 'bold'
    },
    errorMessage: {
        color: 'red',
        fontSize: 12,
        fontWeight: 'bold',
        paddingLeft: 20
    },
    boxShareButton: {
        alignItems: 'center',
        marginBottom: 10
    },
    shared: {
        backgroundColor: '#1877f2',
        borderRadius: 50,
        paddingTop: 5,
        paddingBottom: 5
    },
    sharedText: {
        color: '#fff',
        fontWeight: 'bold',
        paddingHorizontal: 30
    }
});

export default formStyles;