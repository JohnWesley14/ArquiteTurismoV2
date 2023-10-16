import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ModalScreen from './Modal';



const Header = () => {
  const navigation = useNavigation()
  const [modalVisibility, setModalVisibility] = useState(false)

  const toggle = () => {
    return setModalVisibility(!modalVisibility)
  }
  

  return (
    <View style={style.header}>
      <View style={style.secaoDivs}> 

        <View style={style.divLogo}>
          <Image style={style.image} source={require('./../images/logo.png')}/>
          <Text style={style.texto}>Projeto Integrador</Text>
        </View>
        
        <View style={style.divRight}>
          <TouchableOpacity style={{position: 'relative'}} onPress={() => console.log('Click')}>
            
            <Image source={require('./../images/person.png')} />
            {modalVisibility ? <ModalScreen /> : null}

            

          </TouchableOpacity>
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
    marginBottom: 10,
    marginBottom: 50,
    
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
   borderColor: '#20232a',
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
   
   zIndex: 99,
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center',
   display: 'flex',
   gap: 25,
   marginRight: 30,
  },
  
})

export default Header

