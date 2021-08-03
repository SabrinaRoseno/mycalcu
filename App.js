import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import Header from './src/componentes/Header';
import Content from './src/componentes/Content';
import Footer from './src/componentes/Footer';



export default function App() {
  return (
    <SafeAreaView>
    <ScrollView>
    <StatusBar hidden ={false}></StatusBar>

    <Header/>
    <Content/>
    <Footer/>  


    </ScrollView>
    </SafeAreaView>
  );
}
