import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import Cart from '../assets/icons/shopping-cart.svg'
import Badge from './Badge'

const CartMenu = ({itemCount, resetCart}) => {
  return (
    <TouchableOpacity style={style.container} onPress={() => resetCart()}>
      {itemCount > 0 && <Badge value={itemCount}/>}
      <Cart/>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  container : {
    height: 60, 
    width: 60, 
    alignItems: 'center', 
    justifyContent: 'space-around'
  }
})

export default CartMenu
