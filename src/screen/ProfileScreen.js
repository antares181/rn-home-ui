import React from 'react'
import {View, Text, SafeAreaView} from 'react-native'
import global from '../assets/styles/global'
import { useRoute } from '@react-navigation/native'

const ProfileScreen = ({navigation}) => {
  const {name} = useRoute()

  return (
    <SafeAreaView style={[global.layout.container, {alignItems: 'center'}]}>
      <View style={global.layout.section}>
        <Text style={global.text.title}>Profile Screen</Text>
      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen