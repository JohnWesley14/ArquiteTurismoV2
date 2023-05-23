import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Header from '../../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import Buttons from '../../components/Buttons'
import ListOfButtons from '../../components/ListOfButtons'

const Lencol = ( ) => {
  
  return (
   <SafeAreaView style={style.divTeatro}>
      <Header />
     
      
         <View style={style.divCard} >
            <View style={style.infoPrincipal}>
               <Text style={style.heading}>Lençóis Maranhenses</Text>
               <Image source={require('./../../images/lencol.jpg')} style={style.image}/>
               <Text style={style.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium veritatis architecto minima rem labore fuga eaque. Hic tempore maxime dolores officia labore animi praesentium fugit? Ipsam quia nam molestias praesentium officia, aliquam atque quis commodi debitis! Incidunt animi deleniti, ducimus maiores reprehenderit doloremque aliquid quas voluptates veritatis odit possimus. Totam!</Text>
            </View>
            
            <View style={style.listButtons}>
               <Buttons />
            </View>
         </View>
    
   </SafeAreaView>
   
   
   
  )
}

const style = StyleSheet.create({
   divTeatro:{
      alignItems: 'center',
      
      backgroundColor: 'white',
      flex: 1,
      backgroundColor: '#0F0F0F',
   },
   divCard:{
      maxWidth: '95%',
      borderWidth: 1,
      borderColor: '#20232a',
      borderRadius: 10,
      minHeight: 600,
      alignItems: 'center',
   },
   image:{
      maxWidth: '100%',
      height: 280,
      borderRadius: 10,
      width: 430,
   },
   heading:{
      color: "#FFF",
      paddingBottom: 16,
      fontSize: 17,
      marginTop: 10,
   },
   description:{
      color: "#FFF",
      fontSize: 13,
      fontWeight: 300,
      paddingLeft: 20,
      paddingRight: 10,
      marginTop: 5,
   },
   
   infoPrincipal:{
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
   },
   listButtons:{
      width: '100%',
      height: '40%',
   }
   
})
export default Lencol