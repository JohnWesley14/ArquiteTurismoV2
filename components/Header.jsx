import { View, Text, Image, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = () => {
  return (
    <View style={style.header}>
      <View style={style.secaoDivs}> 

        <View style={style.divLogo}>
          <Image style={style.image} source={require('./../images/logo.png')}/>
          <Text style={style.texto}>ArquiteTurismoMa</Text>
        </View>

        <View style={style.divRight}>
          <Image source={require('./../images/person.png')} />
          <AntDesign name="search1" size={24} color="white" />
        </View> 

      </View>
      
      
    </View>
  )
}

const style = StyleSheet.create({
  header:{
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'flex-end',
    
  },
  secaoDivs:{
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 18,
    paddingRight: 18,
    
  },
  image:{
    width: 70,
    height: 60,
    
  },
  divLogo:{
   flexDirection: 'row',
   alignItems: 'center',
   borderWidth: 2,
   borderColor: '#FFF',
   borderRadius: 10,
    
  },
  texto:{
    fontSize: 14,
    color: '#FFF',
    textAlign: 'center',
    marginEnd: 10,
    fontStyle: 'italic',
   
    
  },
  divRight:{
   
    
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center',
   display: 'flex',
   gap: 25,
    
  },
  
})

export default Header