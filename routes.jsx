
import Home from './pages/Home';
import Page from './pages/Page';
import { Entypo, Fontisto, Octicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ArthurAzevedo from './pages/LocalList/ArthurAzevedo';

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
        
        <Tab.Screen name="Teatro" component={ArthurAzevedo} options={{title: "Perfil", headerShown: false,tabBarIcon: () =>(
          <Octicons name="feed-person" size={20} color="white" />
        )
      } }/>
        
        
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Routes

