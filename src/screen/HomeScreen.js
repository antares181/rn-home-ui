import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import GLOBAL from '../assets/styles/global'
import BottomNavigation from '../components/bottom-navigation/BottomNavigation'
import { useRoute } from '@react-navigation/native'
import Heart from '../assets/icons/heart.svg'
import HeartIcon from './HeartIcon'

const Home = ({navigation}) => {
  const {name} = useRoute()

  return (
    <View style={GLOBAL.LAYOUT.container}>
      <Text style={GLOBAL.TEXT.title}>Home Screen</Text>
      <Text style={GLOBAL.TEXT.text}>Home Screen</Text>
      <Heart color={'blue'} strokeColor={'white'} width={120} height={40} />
      <HeartIcon fillColor={'white'} strokeColor={'blue'}/>
      {/* <BottomNavigation routeName={name}/> */}
      <TouchableOpacity 
        onPress={() => navigation.navigate('Wishlist')}>
        <Text>Notification</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home