import { View, Text, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import Card from './Card'

const ListOfCards = () => {
  imagens ={
   
    imagemAzevedo: require(`./../images/arthuraz.jpg`),
    centro: require(`./../images/centro.jpg`),
    
   }
  return (
    <ScrollView >
      <View style={style.container}>
      
        <Card heading={"Teatro Arthur Azevedo"} nameImage={imagens.imagemAzevedo} desc={"Localizado em São Luis, o teatro conta com vários destaques, como por exemplo o incrível... Ler Mais"}/>

     
      
        <Card heading={"Centro"} nameImage={imagens.centro} desc={"Este local é encantador devido a sua incrível arquitetura de casas e prédios históricos e.... Ler Mais"}/>
        <Card heading={"Centro"} nameImage={imagens.centro} desc={"Este local é encantador devido a sua incrível arquitetura de casas e prédios históricos e.... Ler Mais"}/>
        <Card heading={"Centro"} nameImage={imagens.centro} desc={"Este local é encantador devido a sua incrível arquitetura de casas e prédios históricos e.... Ler Mais"}/>
      
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
      paddingTop: 30,
   },
   
})
export default ListOfCards