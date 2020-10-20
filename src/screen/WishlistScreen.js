import React from 'react'
import {View, Text, SafeAreaView} from 'react-native'
import global from '../assets/styles/global'
import { useRoute } from '@react-navigation/native'

const WishlistScreen = ({navigation}) => {
  const {name} = useRoute()

  return (
    <SafeAreaView style={[global.layout.container, {alignItems: 'center'}]}>
      <View style={global.layout.section}>
        <Text style={global.text.title}>Wishlist Screen</Text>
      </View>
    </SafeAreaView>
  )
}

export default WishlistScreen