
import Home from './pages/Home';
import Page from './pages/Page';
import { Entypo, Fontisto, Octicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ArthurAzevedo from './pages/LocalList/ArthurAzevedo';
import Centro from './pages/LocalList/Centro';
import Teste from './pages/Teste';
import Palacio from './pages/LocalList/Palacio';
import Lencol from './pages/LocalList/Lencol';
import ModalScreen from './components/Modal';


const Tab = createBottomTabNavigator();


function Routes() {
  
  


  return (
    
    <NavigationContainer >

      <Tab.Navigator screenOptions={{tabBarStyle: {backgroundColor: 'black', paddingTop: 10, borderWidth: 0,}}} initialRouteName='Home' >
        <Tab.Screen name="Page" component={Page} options={{title: "Favoritos", headerShown: false, 
        tabBarIcon: () =>(
          <Fontisto name="heart" size={20} color="white" />
        )}
        
        }/> 
        <Tab.Screen name="Home" component={Home} options={{title: "Home", headerShown: false,
      tabBarIcon: () =>(
        <Entypo name="home" size={24} color="white"/>
        
      )} }/>
        
        
        <Tab.Screen name='Teatro' component={ArthurAzevedo} options={ { tabBarButton: () => null, tabBarVisible: false, headerShown: false }} />
        <Tab.Screen name='Centro' component={Centro} options={ { tabBarButton: () => null, tabBarVisible: false, headerShown: false }} />
        <Tab.Screen name='Palacio' component={Palacio} options={ { tabBarButton: () => null, tabBarVisible: false, headerShown: false }} />
        <Tab.Screen name='Lencol' component={Lencol} options={ { tabBarButton: () => null, tabBarVisible: false, headerShown: false }} />
        <Tab.Screen name='Modal' component={ModalScreen} options={ { tabBarButton: () => null, tabBarVisible: false, headerShown: false }} />

        
        

      </Tab.Navigator>
    </NavigationContainer>
  );
}
const HiddenScreen = () => {
  return null;
};
export default Routes

