import { View, Text, Image, Touchable, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import React from 'react'

const Buttons = () => {
  return (
    <View style={style.sectionButtons}>
      <View style={style.sectionDivButtons}>
        <TouchableOpacity style={style.button}>
          <Ionicons name="location-sharp" size={30} color="white" />
          <Text style={style.nameButton}>Localização</Text>
          
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Ionicons name="md-people" size={30} color="white" />
          <Text style={style.nameButton}>Apresentações</Text>
        </TouchableOpacity>
      </View>
      <View style={style.sectionDivButtons}>
        <TouchableOpacity style={style.button}>
          <Ionicons name="newspaper-outline" size={30} color="white" />
          <Text style={style.nameButton}>História</Text>
          
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <AntDesign name="message1" size={30} color="white" />
          <Text style={style.nameButton}>Comentários</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}


export default Buttons

const style = StyleSheet.create({
  sectionButtons:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%',
    
    
 },
 button:{
    borderWidth: 1,
    borderColor: '#20232a',
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 120,
    padding: 20,
    marginTop: 15,
    width: 200,

 },
 nameButton:{
  color: "#FFF",
  borderWidth: 1,
  borderColor: '#20232a',
  borderRadius: 10,
  width: 150,
  height: 30,
  textAlign: 'center',
  paddingTop: 3,
  
},sectionDivButtons:{
  marginTop: 30
}
})