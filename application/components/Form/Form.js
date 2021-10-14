import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    Vibration,
    TouchableOpacity,
    Pressable, 
    Keyboard,
    FlatList
    } from 'react-native';
import styles from './style';
import ResultImc from '../ResultImc/ResultImc';


export default function Form(){

const [height, setHeight] = useState(null);
const [weight, setWeight] = useState(null);
const [messageResultImc, setMessageResultImc] = useState("preencha o peso e a altura");
const [imc, setImc] = useState(null);
const [textButton, setTextButton] = useState("Calcular");
const [errorMessage, setErrorMessage] = useState(null);
const [imcList, setImcList] = useState([])

function verificationImc(){
    if(imc == null){
        Vibration.vibrate();
        setErrorMessage("*Campo Obrigatório")
    }
}

function imcCalculator(){
    let heightFormat = height.replace(",", ".")
    let totalImc = (weight / (heightFormat * heightFormat)).toFixed(2);
    setImcList((arr) => [...arr, { id: new Date().getTime(), imc: totalImc }])
    setImc(totalImc)

}

function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageResultImc("Seu imc é igual: ")
        setTextButton("Calcular Novamente")
        setErrorMessage(null)
    }
    else{
        verificationImc()
        setImc(null)
        setTextButton("Calcular")
        setMessageResultImc("Preencha o peso e altura")
    }
}

    return(
        
        <View style={styles.formContent}>
            {imc == null ? 
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>

                <TextInput
                style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.75"
                keyboardType="numeric"
                /> 

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text> 
                <TextInput

                style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 75.360"
                keyboardType="numeric"
                />

                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() =>{validationImc()}}
                >
                <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>  

            </Pressable> 
                : 
                <View style={styles.exhibitionResultImc}>
                    <ResultImc messageResultImc={messageResultImc} resultImc={imc} />  
                    <TouchableOpacity
                        style={styles.buttonCalculator}
                        onPress={() =>{validationImc()}}
                    >
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
                }
                <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.listImcs}  

                data = {imcList.reverse()}
                renderItem={({ item }) => {
                    return(

                        <Text style={styles.resultImcItem}>
                            <Text style={styles.textResultItemList}>Resultado IMC = {item.imc}</Text>
                        </Text>
            
                    );
                }}
                keyExtractor = {(item) => {
                    item.id;
                }}
                />
        </View> 
    );
}