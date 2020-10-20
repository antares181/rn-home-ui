import { StyleSheet } from 'react-native';
import {colors} from './colors';
import { size } from './size';

const layout = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
    height: '100%'
  },
  section: {
    padding: size.DefaultMargin
  },
  rowJustifyBetween: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
});

const text = StyleSheet.create({
  title: {
    color: colors.Black,
    fontSize: size.TextTitle,
    fontWeight: 'bold'
  },
  text: {
    color: colors.Black,
    fontSize: size.TextDefault
  }
});

const global = { layout, text }

export default global;