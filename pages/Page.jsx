import { View, Image, StyleSheet} from 'react-native'
import React from 'react'





const Page = () => {
  return (
    <View style={styles.container}>
      <TextHeader />
          
      <View style={styles.divImage}>
        
        
        <List />
        
      </View>
      

    </View>
      
      
    
  )
}

export default Page

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'gray',
    
    
  }
  
  
})