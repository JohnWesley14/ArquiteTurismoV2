
import Home from './pages/Home';
import Page from './pages/Page';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ArthurAzevedo from './pages/LocalList/ArthurAzevedo';
const Tab = createBottomTabNavigator();

function Routes() {
  return (
    
    <NavigationContainer >
      <Tab.Navigator screenOptions={{tabBarStyle: {backgroundColor: 'black'}}}>
        <Tab.Screen name="Home" component={Home} options={{title: "Home", headerShown: false} }/>
        <Tab.Screen name="Page" component={Page} options={{title: "Label", headerShown: false} }/>
        <Tab.Screen name="Teatro" component={ArthurAzevedo} options={{title: "Label", headerShown: false} }/>
        
        
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Routes

