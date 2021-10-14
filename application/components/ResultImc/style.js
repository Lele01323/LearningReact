import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    information: {
        flex: 1,
        paddingTop:10,
        marginTop:20,
        borderRadius:50,
        alignItems: 'center',
        width: '100%',
    },
    numberImc:{
        fontSize: 48,
        color:'#ff0043',
        fontWeight: 'bold'
    },  
    resultImc:{
        fontSize: 18,
        color:'#ff0043',
        fontWeight: 'bold'
    },
    boxSharebutton:{
        width: '100%',
        alignItems: 'center',
        marginBottom: 10
    },
    shared:{
        backgroundColor: '#1877f2',
        width:'30%',
        borderRadius: 50,
        paddingBottom: 5,
        paddingTop: 5
    },
    sharedText:{
        color:'#ffffff',
        fontWeight: 'bold',
        textAlign: 'center'
    }  

});

export default styles;