import React from 'react';
import { 
    View, 
    Text,
    TouchableOpacity, 
    Share 
    } from 'react-native';
import styles from './style';

export default function ResultImc(props) {
    const onShare = async () => {
        const result = await Share.share({
            message: "Meu imc hoje é: " + props.resultImc,
        })
    }

    return(
        <View style={styles.information}>
            <Text style={styles.resultImc}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
            <View style={styles.boxSharebutton}>
            <TouchableOpacity
                onPress={onShare}
                style={styles.shared}
            >     
            <Text style={styles.sharedText}>Share</Text>
            </TouchableOpacity>    
            </View>     
        </View> 
    );
}
