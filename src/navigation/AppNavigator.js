import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { HomeTab } from './MainNavigator';
import CartScreen from '../screen/CartScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name="Home"
        component={HomeTab}
        options={({route}) => ({
          headerShown: false,
          title: route,
        })}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={({route}) => ({
          headerShown: false,
          title: route,
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default AppNavigator;