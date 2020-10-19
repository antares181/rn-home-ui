import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import WishlistScreen from '../screen/WishlistScreen';
import ProfileScreen from '../screen/ProfileScreen';

const Stack = createStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator initialRouteName="Dashboard">
    <Stack.Screen
      name="Dashboard"
      component={HomeScreen}
      options={({route}) => ({
        headerShown: false,
        title: route,
      })}
    />
    <Stack.Screen
      name="Wishlist"
      component={WishlistScreen}
      options={({route}) => ({
        headerShown: false,
        title: route,
      })}
    />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={({route}) => ({
        headerShown: false,
        title: route,
      })}
    />
  </Stack.Navigator>
);

export default MainNavigator;
