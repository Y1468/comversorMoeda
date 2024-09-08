
import { Component } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { api } from '../services/api';


export default class Conversor extends Component{

  constructor(props){
     super(props)

     this.state={
        moedaA:props.moedaA,
        moedaB:props.moedaB,
        moedaB_valor:0,
        valorComvertido:0
     }

     this.converter=this.converter.bind(this)
  }

  async converter(){

      let de_para=this.state.moedaA + '_' + this.state.moedaB
      const response=await api.get(`/currency/${de_para}?token=8148|lZOjl7oxhX0W1E2sg1OaFNT3iCUXEgcL`)
      let cotacao=response.data[de_para].price
      console.log(cotacao)

      let resultado=(cotacao*parseFloat(this.state.moedaB_valor))
      
      this.setState(
         {valorComvertido: resultado.toFixed(2)}
      )

      Keyboard.dismiss()
  }

   render(){
    const {moedaA,moedaB}=this.props
     return(
        <View style={st.container}>
           <View>
              <Text style={st.txt}>{moedaA} para {moedaB}</Text>
              <TextInput
                placeholder='Valor a ser convertido'
                keyboardType='numeric'
                onChangeText={(moedaB_valor)=>this.setState({moedaB_valor:moedaB_valor})}
                style={st.txtInput}
              />
           </View>
           <TouchableOpacity style={st.btn} onPress={this.converter}>
              <Text style={st.txtBtn}>Comverter</Text>
           </TouchableOpacity>

           <Text style={st.txtRes}>

            {
            (this.state.valorComvertido==0) ? ''
              : this.state.valorComvertido
            }

           </Text>
        </View>
     )
   }
}

const st = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },

    txt:{
       fontSize:30,
       fontWeight:'bold',
       color:'#000'
    },

    txtInput:{
       width:280,
       height:45,
       backgroundColor:'#CCC',
       textAlign:'center',
       marginTop:15,
       fontSize:20,
       color:'#000',
       borderRadius:5
    },

    btn:{
     width:150,
     height:45,
     backgroundColor:'red',
     borderRadius:5,
     justifyContent:'center',
     alignItems:'center',
     marginTop:15

    },

    txtBtn:{
       fontSize:17,
       fontWeight:'bold',
       color:'#FFF'

    },

    txtRes:{
       fontSize:30,
       fontWeight:'bold',
       color:'#000',
       marginTop:15
    }
});
