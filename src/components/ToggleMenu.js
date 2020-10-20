import React, { useState } from 'react'
import { TouchableOpacity, Animated, StyleSheet } from 'react-native'
import Menu from '../assets/icons/menu.svg';
import Close from '../assets/icons/close.svg';

const ToggleMenu = () => {

  const [animated, setAnimated] = useState(new Animated.Value(1));
  const [animated2, setAnimated2] = useState(new Animated.Value(0));

  const [menuOpen, setMenuOpen] = useState(false)

  function toggleButton() {
    Animated.timing(animated, {
      toValue: menuOpen ? 1 : 0,
      duration: 100,
      useNativeDriver: true
    }).start(() => {
      Animated.timing(animated2, {
        toValue: menuOpen ? 0 : 1,
        duration: 100,
        useNativeDriver: true
      }).start()
    });
    setMenuOpen(!menuOpen)
  }

  return (
    <TouchableOpacity style={style.container} onPress={toggleButton}>
      <Animated.View style={[style.icon, {opacity: animated, transform: [
        {
          rotate: animated.interpolate({
            inputRange: [0, 1],
            outputRange: ['30deg', '0deg'],
          })
        }
      ]}]}>
        <Menu/>
      </Animated.View>
      <Animated.View style={[style.icon, {opacity: animated2, transform: [
        {
          rotate: animated2.interpolate({
            inputRange: [0, 1],
            outputRange: ['30deg', '0deg'],
          })
        }
      ]}]}>
        <Close/>
      </Animated.View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  container: {
    height: 60, 
    width: 60, 
    alignItems: 'flex-start',
  },
  icon: {
    position: 'absolute', 
    top: '30%', 
  }
})

export default ToggleMenu
