import { View, Text, Image, Touchable, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Buttons = () => {
  return (
    <View style={style.sectionButtons}>
      <TouchableOpacity style={style.button}>
        <Image source={require('./../images/Location.png')}/>
        <Text style={style.nameButton}>Localização</Text>
        
      </TouchableOpacity>
    </View>
  )
}


export default Buttons

const style = StyleSheet.create({
  sectionButtons:{
    width: '100%',
    
    
 },
 button:{
    borderWidth: 1,
    borderColor: '#20232a',
    borderRadius: 10,
    minWidth: '30%',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 120,
    padding: 20,
    marginLeft: 18,
    marginTop: 15,
    width: 220,

 },
 nameButton:{
  color: "#FFF",
  borderWidth: 1,
  borderColor: '#20232a',
  borderRadius: 10,
  width: '110%',
  height: 30,
  textAlign: 'center',
  

},
})