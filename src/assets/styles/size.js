import { Dimensions } from 'react-native'

const size = {
  // text size
  TextTitle: 22,
  TextSubtitle: 14,
  TextDefault: 14,
  TextSmall: 12,
  
  // icon size
  IconDefaultSmall: 16,
  IconDefault: 24,
  IconDefaultMedium: 32,

  // layout size
  DefaultMargin: 20,
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export {size, windowHeight, windowWidth}