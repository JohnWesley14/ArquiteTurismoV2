import { View, Image, StyleSheet, Text} from 'react-native'
import React from 'react'

import MapView from 'react-native-maps';
import { TouchableOpacity } from 'react-native';



const Page = () => {
  function irLocal(){
    valorLatitude = -2.5535678110698923
    valorLongitude = -44.24195170431791
  }

  const locations = {
    latitudes:{
      latitudeInicial: -2.531315934970209,
      latitudeFinal: valorLatitude
    },
    longitude:{
      longitudeInicial: -44.301393451251556,
      longitudeFinal: valorLongitude
    }
  }
  //ripel -2.5535678110698923, -44.24195170431791
  return (
    <View style={styles.container}>
      
          
      <TouchableOpacity style={styles.button} onPress={irLocal }>
        <Text>Ripel Reciclagem</Text>
      </TouchableOpacity>
      <MapView style={styles.a}
      
        initialRegion={ {
          latitude: -2.531315934970209, 
          longitude: -44.301393451251556,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

    </View>
      
      
    
  )
}

export default Page

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F0F0F'
   
    
    
  },
  a:{
    borderColor: 'red',
    borderWidth: 2,
    width: '80%',
    height: '80%'
  },
  button:{
    backgroundColor: '#FFF',
    borderColor: 'red',
    borderWidth: 2,
    width: 100,
    height: 40
  }
  
})