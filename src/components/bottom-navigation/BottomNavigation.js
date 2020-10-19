import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import { SIZE } from '../../assets/styles/size';
import navData from './NavData';

const BottomNavigation = (props) => {
  console.info(props)
  return (
    <View>
      {navData.map(el => {
        return <Icon key={el.name} name={el.icon} size={SIZE.IconDefault} color={props.routeName === el.name ? 'blue' : 'black'}/>      
      })}
    </View>
  )
}

export default BottomNavigation;