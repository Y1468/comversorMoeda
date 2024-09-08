import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Conversor from './components/conversor';


export default class App extends Component{
   render(){
     return(
        <View style={st.container}>
           <Conversor moedaA='USD' moedaB='BRL'/>
        </View>
     )
   }
}

const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
