import { StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import ListOfCards from '../components/ListOfCards'


const Home = ({ navigation, }) => {
  
  return (
    <SafeAreaView style={styles.container}>
      
      <Header style={styles.headerFixed}/>
      <ListOfCards />
      <StatusBar
        animated={true}
        backgroundColor="#0F0F0F"
      />
      
      
      
      
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
   container:{
      alignItems: 'center',
      
      
      flex: 1,
      backgroundColor: '#0F0F0F'
   },
   headerFixed:{
    marginTop: 30,
    zIndex: 99
    
   }
})