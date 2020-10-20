import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../assets/styles/colors'
import { size } from '../assets/styles/size'

const Badge = ({value}) => {
  return (
    <View style={style.container}>
      <Text style={style.text}>{value}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    height: 23, 
    width: 23, 
    backgroundColor: 'red', 
    alignItems: 'center', 
    justifyContent: 'space-around', 
    flexDirection: 'row', 
    borderRadius: 20,
    position: 'absolute',
    right: 0,
    top: 5,
    zIndex: 2
  },
  text: {
    fontSize: size.TextSmall, 
    fontWeight: 'bold', 
    color: colors.White
  }
})

export default Badge
