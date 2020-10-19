import { StyleSheet } from 'react-native';
import {COLOR} from './colors';
import { SIZE } from './size';

const LAYOUT = StyleSheet.create({
  container: {
    backgroundColor: COLOR.Primary,
    padding: SIZE.DefaultMargin,
  }
});

const TEXT = StyleSheet.create({
  title: {
    color: COLOR.Black,
    fontSize: SIZE.TextTitle
  },
  text: {
    color: COLOR.Black,
    fontSize: SIZE.TextDefault
  }
});

const GLOBAL = { LAYOUT, TEXT }

export default GLOBAL;