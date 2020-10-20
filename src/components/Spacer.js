import React from 'react'
import { View, Text } from 'react-native'

const Spacer = ({type}) => {
  switch (type) {
    case 'large':
      return (
        <View style={{ height: 60 }} />
      )
    case 'medium':
      return (
        <View style={{ height: 40 }} />
      )
    default:
      return (
        <View style={{ height: 20 }} />
      )
  }
}

export default Spacer
