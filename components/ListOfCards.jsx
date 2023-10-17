import { View, Text, StyleSheet, ScrollView, FlatList, SafeAreaView} from 'react-native'
import React from 'react'
import Card from './Card'
import { info } from '../data/data'
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
    // <ScrollView contentContainerStyle={{zIndex: 0, marginTop: 10}}>
    //   <View style={style.container}>
        
    //     <Card heading={info.paper.title} nameOfRedirect={"Teatro"} nameImage={info.paper.image} desc={info.paper.descricao}/>

     
      
    //     <Card heading={info.organic.title} nameImage={info.organic.image} nameOfRedirect={"Centro"} desc={info.organic.descricao}/>
    //     <Card heading={info.glass.title} nameImage={info.glass.image} nameOfRedirect={"Lencol"} desc={info.glass.descricao}/>
    //     <Card heading={"Palácio dos Leões"} nameImage={imagens.palacio} nameOfRedirect={"Palacio"} desc={"Este local é encantador devido a sua incrível arquitetura de casas e prédios históricos e.... Ler Mais"}/>
      
    //   </View>
    // </ScrollView>
    <SafeAreaView>
      <FlatList
        data={info}
        renderItem={({item}) => <Card heading={item.title} nameImage={item.image} desc={item.descricao} nameOfRedirect={item} />}
        keyExtractor={item => item.id}
    />
    </SafeAreaView>
    
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