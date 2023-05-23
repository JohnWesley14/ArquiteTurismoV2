import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Card = ({ heading, nameImage, desc, nameOfRedirect } ) => {
  const navigation = useNavigation()


  arthur ={
   
   imagemAzevedo: require(`./../images/arthuraz.jpg`),
   
  }
  return (
   <TouchableOpacity style={{zIndex:0}} onPress={() => navigation.navigate(nameOfRedirect)}>
      <View style={style.divCard} >
      
         <Text style={style.heading}>{heading}</Text>
         <Image source={nameImage} style={style.image}/>
         <Text style={style.description}>{desc}</Text>
      
      </View>
   </TouchableOpacity>
   
  )
}

const style = StyleSheet.create({
   divCard:{
      minWidth: 460,
      maxWidth: 460,
      width: '83%',
      borderWidth: 2,
      borderColor: '#20232a',
      borderRadius: 10,
      minHeight: 400,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 0,
      
   },
   image:{
      width: 430,
      height: 280,
      borderRadius: 10,
   },
   heading:{
      color: "#FFF",
      paddingBottom: 16,
      fontSize: 17,
   },
   description:{
      color: "#FFF",
      fontSize: 13,
      fontWeight: 300,
      paddingStart: 20,
      paddingEnd: 10,
      marginTop: 5,
   }
})
export default Card