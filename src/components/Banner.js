import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Animated,
  StyleSheet,
  Image,
} from "react-native";
import { colors } from '../assets/styles/colors';
import { size, windowWidth } from '../assets/styles/size';
import dataBanners from "../data/DataBanner";

export default function Banner() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const slider = useRef(null);
  const [bannerIndex, setBannerIndex] = useState(0);
  const imageWidth = windowWidth - 100;

  useEffect(() => {
    scrollX.addListener(({ value }) => {
      const val = Math.round(value / (windowWidth - 100));
      setBannerIndex(val);
    });

    return () => {
      scrollX.removeAllListeners();
    };
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View
        style={[styles.card, {width: imageWidth}]}
      >
        <Image
          source={item.image}
          style={styles.cardImage}
        />
      </View>
    );
  };

  return (
    <View>
      <Animated.FlatList
        ref={slider}
        horizontal
        pagingEnabled
        decelerationRate='normal'
        bounces={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={5}
        data={dataBanners}
        snapToInterval={imageWidth + 40}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        initialNumToRender={1}
        maxToRenderPerBatch={1}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
      />

      <View style={styles.container}>
        <View style={styles.wrapper}>
          {dataBanners.map(el => {
            return (
              <View key={el.id} style={[ 
                styles.indicator, 
                { 
                  backgroundColor: el.id == dataBanners[bannerIndex].id ? colors.Grey : 'transparent'
                }]}
              ></View>
            )
          })}
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row', 
    alignItems: 'flex-start', 
    marginHorizontal: size.DefaultMargin + 10
  },
  wrapper: { 
    marginTop: 20, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    width: windowWidth / 7
  },
  indicator: {
    borderWidth: 1, 
    borderColor: colors.GreyLighten2, 
    height: 8, 
    width: 8, 
    borderRadius: 8,
  },
  card: {
    marginVertical: 10,
    elevation: 5,
    backgroundColor: colors.White,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 20
  },
  cardImage: { 
    width: '100%', 
    height: 200, 
    borderRadius: 10 
  }
});