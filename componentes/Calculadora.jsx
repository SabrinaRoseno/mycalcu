import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";


export default function Content(){
    const [calculo, setCalculo] = useState({
        a: "",
        b: "",
        resultado:""
    })

    console.log(calculo)

    const handleInputChange = (parametro, valor) => {
        setCalculo({
            ...calculo, [parametro]: valor
        })
    }

    const soma = () => {
        setCalculo({
            ...calculo, resultado: (calculo.a + calculo.b)
        })
    }

    const subtracao = () => {
        setCalculo({
            ...calculo, resultado: (calculo.a - calculo.b)
        })
    }

    const multiplicacao = () => {
        setCalculo({
            ...calculo, resultado: (calculo.a * calculo.b)
        })
    }

    const divisao = () => {
        setCalculo({
            ...calculo, resultado: (calculo.a / calculo.b)
        })
    }

    const restoDivisao = () => {
        setCalculo({
            ...calculo, resultado: (calculo.a % calculo.b)
        })
    }

    const expoente = () => {
        setCalculo({
            ...calculo, resultado: (calculo.a ** calculo.b)
        })
    }

    return(
        <View style={styles.container}>
            <Text style={styles.resultado}>{calculo.resultado}</Text>
            <View style={styles.alinhagem}>
                <TextInput
                    style={styles.sty}
                    placeholder="Valor A"
                    onChangeText={(valor)=>handleInputChange("a", Number(valor))}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.sty}
                    placeholder="Valor B"
                    onChangeText={(valor)=>handleInputChange("b", Number(valor))}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.alinhagem}>
                <TouchableOpacity 
                    style={styles.btt}
                    onPress={soma}>
                    <Text>+</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.btt}
                    onPress={subtracao}>
                    <Text>-</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.btt}
                    onPress={multiplicacao}>
                    <Text>*</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.alinhagem}>
                <TouchableOpacity 
                    style={styles.btt}
                    onPress={divisao}>
                    <Text>/</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.btt}
                    onPress={expoente}>
                    <Text>a^</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.btt}
                    onPress={restoDivisao}>
                    <Text>%</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop:25,
        backgroundColor: '#D900E0',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:"44%",
        marginTop:70,      
        paddingBottom:20,
        borderWidth:2,
        borderRadius:12,
        width: 250,
        
      },
      alinhagem:{
        flexDirection: "row",
    },
    resultado:{
        textAlign:"center",
        justifyContent: "center",
        backgroundColor:"purple",
        borderWidth:1,
        width:180,
        height: 50,
        alignItems: "center",
        marginBottom:30,  
        paddingTop:3,
        
    },

    sty:{
        width:80,
        borderWidth:1,
        borderRadius: 20,
        marginLeft:5,
        textAlign:"center",
        height:40,
        backgroundColor:"white",
    },

    btt:{
        backgroundColor:"#F70C90",
        borderWidth:1,
        width: 50,
        height: 50,
        borderRadius:50,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginLeft:5,
    }
    
})