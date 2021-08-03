import React from 'react';
import { View, Text, StyleSheet } from "react-native";

export default function Footer(){

    return(

        <View style={styles.viewFooter}>

            <Text>Por: Sabrina Roseno, Brasil, 2021</Text>

        </View>

    )

}




const styles = StyleSheet.create({

    viewFooter:{
        backgroundColor:"#6B0CED",
        height:75,
        justifyContent: "center",
        alignItems: "center",        
        marginTop: 142,

    },

})