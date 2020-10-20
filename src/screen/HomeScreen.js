import React, { useState } from 'react'
import {View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, NativeModules} from 'react-native'
import global from '../assets/styles/global'
import { colors } from '../assets/styles/colors'
import ToggleMenu from '../components/ToggleMenu'
import CartMenu from '../components/CartMenu'
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'
import Spacer from '../components/Spacer'
import { windowHeight, windowWidth } from '../assets/styles/size'
import ToastExample from '../ToastExample'

const HomeScreen = ({navigation}) => {

  const [cart, setCart] = useState([])
  const [currentItem, setCurrentItem] = useState({})

  function addProduct(item) {
    setCart(data => [...data, item])
    setCurrentItem(item)
    ToastExample.show(`${item.title} added to cart`, ToastExample.SHORT)
  }

  function resetCart() {
    setCart([])
  }

  return (
    <SafeAreaView style={global.layout.container}>
      <View style={style.background}/>
      <ScrollView>
        <View style={global.layout.section}>
          <View style={[global.layout.rowJustifyBetween, {marginBottom: 20}]}>
            <ToggleMenu/>
            <CartMenu itemCount={cart.length} resetCart={() => resetCart()}/>
          </View>
          <Text style={global.text.title}>Nike App Store</Text>
        </View>

        <Banner/>

        <View style={global.layout.section}>
          <Text style={global.text.title}>Our Products</Text>
        </View>

        <ProductList addProduct={(item) => addProduct(item)}/>

      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderTopRightRadius: windowWidth / 1.5,
    backgroundColor: colors.GreyLighten1,
    minHeight: windowHeight,
    width: windowWidth
  },
})

export default HomeScreen