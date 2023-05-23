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
  return (
    <ScrollView contentContainerStyle={{zIndex: 0, marginTop: 10}}>
      <View style={style.container}>
      
        <Card heading={"Teatro Arthur Azevedo"} nameOfRedirect={"Teatro"} nameImage={imagens.imagemAzevedo} desc={"Localizado em São Luis, o teatro conta com vários destaques, como por exemplo o incrível... Ler Mais"}/>

     
      
        <Card heading={"Centro"} nameImage={imagens.centro} nameOfRedirect={"Centro"} desc={"Este local é encantador devido a sua incrível arquitetura de casas e prédios históricos e.... Ler Mais"}/>
        <Card heading={"Lençóis Maranhenses"} nameImage={imagens.lencol} nameOfRedirect={"Lencol"} desc={"Este local é encantador devido a sua incrível arquitetura de casas e prédios históricos e.... Ler Mais"}/>
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