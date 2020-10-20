import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../assets/styles/colors';
import HeartIcon from './icons/HeartIcon';
import HomeIcon from './icons/HomeIcon';
import UserIcon from './icons/UserIcon';

const BottomNavigation = ({ state, navigation }) => {
  return (
    <View style={style.container}>
      {state.routes.map((route, index) => {
        
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        
        switch (route.name) {
          case 'Home':
            return (
              <TouchableOpacity
                style={style.item}
                onPress={onPress}
                key={route.name}
              >
                <HomeIcon fillColor={isFocused && colors.Grey}/>
              </TouchableOpacity>
            )
          case 'Wishlist':
            return (
              <TouchableOpacity
                style={style.item}
                onPress={onPress}
                key={route.name}
              >
                <HeartIcon fillColor={isFocused && colors.Grey}/>
              </TouchableOpacity>
            ) 
            
          case 'Profile':
            return (
              <TouchableOpacity
                style={style.item}
                onPress={onPress}
                key={route.name}
              >
                <UserIcon fillColor={isFocused && colors.Grey}/>
              </TouchableOpacity>
            )
          default:
            return;
        }
      })}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  item: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  }
})

export default BottomNavigation;