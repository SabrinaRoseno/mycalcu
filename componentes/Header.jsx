import { View, Text, Image, StyleSheet } from "react-native";
import React from 'react';

export default function Header(){
    return(
        <View style={styles.viewHeader}>
            <View>
                <Image
                    style={styles.prin}
                    source={require}
                />
            </View>
            <View>
                <Text style={styles.text}>Minha Calculadora</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewHeader:{
        height:75,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#6B0CED"
    },

    prin:{
        height:70,
        width:70,
    },

    text:{
        color: "black",
        fontSize: 20,
        marginLeft:10
    }
})