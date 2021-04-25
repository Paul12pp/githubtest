import React from 'react'
import Home from '../screens/Home/Home.screen'
import Profile from '../screens/Profile/Profile.screen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { createDrawerNavigator } from '@react-navigation/drawer'

export type RootStackParamList = {
  default: undefined;
  Home: undefined;
  Profile: {username:string};
  //Temp: {param: string};
};

export type RootStackNavigationProps<
  T extends keyof RootStackParamList = 'default'
> = StackNavigationProp<RootStackParamList, T>;

//const Stack = createStackNavigator()
const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootStackParamList>();
 
function MyTabs() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          // tabBarIcon: ({ focused, color, size }) => {
          //   return <Icon name={'plus'} size={25} color={color} />
          // }
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          
          //tabBarIcon: ({ color }) =>  <Icon name={'plus'} size={25} color={color} />
          
        }}
      />
    </Drawer.Navigator>
  )
}

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={MyTabs} />
        {/* add your another screen here using -> Stack.Screen */}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
