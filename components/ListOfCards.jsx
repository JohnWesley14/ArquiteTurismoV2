import { View, Text, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import Card from './Card'

const ListOfCards = () => {
  imagens ={
   
    imagemAzevedo: require(`./../images/arthuraz.jpg`),
    centro: require(`./../images/centro.jpg`),
    lencol: require('./../images/lencol.jpg'),
    palacio: require('./../images/palacio.jpg'),

    
    
  }
  imagensIntegrador ={
    papel: {uri: 'https://www.cbsaparasdepapel.com.br/imagens/informacoes/empresa-reciclagem-papel-06.jpg'},
    organico: {uri: 'https://static.todamateria.com.br/upload/57/11/571112733a529-lixo-organico.jpg'},
    vidro: {uri: 'https://cempre.org.br/wp-content/uploads/2020/11/titimg-rec-vidro.png'},

  }
  return (
    <ScrollView contentContainerStyle={{zIndex: 0, marginTop: 10}}>
      <View style={style.container}>
      
        <Card heading={"Reciclar papel"} nameOfRedirect={"Teatro"} nameImage={imagensIntegrador.papel} desc={"Localizado em São Luis, o teatro conta com vários destaques, como por exemplo o incrível... Ler Mais"}/>

     
      
        <Card heading={"Reciclar lixo orgânico"} nameImage={imagensIntegrador.organico} nameOfRedirect={"Centro"} desc={"Este local é encantador devido a sua incrível arquitetura de casas e prédios históricos e.... Ler Mais"}/>
        <Card heading={"Reciclar vidro"} nameImage={imagensIntegrador.vidro} nameOfRedirect={"Lencol"} desc={"Este local é encantador devido a sua incrível arquitetura de casas e prédios históricos e.... Ler Mais"}/>
        <Card heading={"Palácio dos Leões"} nameImage={imagens.palacio} nameOfRedirect={"Palacio"} desc={"Este local é encantador devido a sua incrível arquitetura de casas e prédios históricos e.... Ler Mais"}/>
      
      </View>
    </ScrollView>
  )
}
const style = StyleSheet.create({
   container:{
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      gap: 30,
      marginBottom: 20,
      zIndex: 1
   },
   
})
export default ListOfCards