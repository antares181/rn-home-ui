import { StackActions } from '@react-navigation/native';
import React, { useEffect } from 'react'
import {View, Text} from 'react-native'

const SplashScreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('App'));
    }, 500);
  })

  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen