import React, { useRef } from 'react'
import { View, Text, Image, StyleSheet, Animated, TouchableOpacity } from 'react-native'
import { colors } from '../assets/styles/colors';
import { size, windowWidth } from '../assets/styles/size';
import PlusIcon from '../assets/icons/plus';
import dataProducts from '../data/DataProduct'

const ProductList = (props) => {

  const slider = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const imageWidth = (windowWidth - 50) / 2;

  const renderItem = ({item}) => {
    return (
      <View
        style={[styles.mainCard, {width: imageWidth}]}
      >
        <Image
          source={item.image}
          style={styles.cardImage}
        />
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: colors.GreyLighten2,
          }}
          onPress={() => props.addProduct(item)}
        >
          <View style={[ styles.flexCenter, {width: imageWidth - 20}]}>
            <PlusIcon/>
            <Text style={{ marginLeft: 10, color: colors.White, fontSize: size.TextSmall }}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View>
      <Animated.FlatList
        ref={slider}
        horizontal
        style={{paddingHorizontal: 10}}
        pagingEnabled
        decelerationRate='normal'
        bounces={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={5}
        data={dataProducts}
        snapToInterval={imageWidth + 20}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        initialNumToRender={1}
        maxToRenderPerBatch={1}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1, 
    borderColor: colors.Grey, 
    height: 10, 
    width: 10, 
    borderRadius: 10,
  },
  mainCard: {
    backgroundColor: colors.White,
    borderRadius: 10,
    elevation: 5,
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 10
  },
  cardImage: { 
    width: '100%', 
    height: 200, 
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  flexCenter: {
    alignItems: 'center',
    flexDirection: 'row'
  }
})

export default ProductList
