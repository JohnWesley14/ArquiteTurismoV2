import { View, Button, Text, StyleSheet } from 'react-native'

const ModalScreen = ({ navigation }) => {
  return (
    <View style={{zIndex: 99, flex: 1, alignItems: 'center', justifyContent: 'center' , position: 'absolute', width: 200, right: -80,top: 60, overflow: 'hidden'}}>
      <View style={{ backgroundColor: 'white', padding: 20 }}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Modal Content</Text>
        <Button title="Fechar Modal" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};


export default ModalScreen