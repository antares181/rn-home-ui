import React from 'react';
import HomeScreen from '../screen/HomeScreen';
import WishlistScreen from '../screen/WishlistScreen';
import ProfileScreen from '../screen/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigation from '../components/BottomNavigation';

const Tab = createBottomTabNavigator();

const HomeTab = () => (
    <Tab.Navigator tabBar={props => <BottomNavigation {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wishlist" component={WishlistScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
);

export {HomeTab};
