import {StyleSheet} from 'react-native';
import {colors, colorsOpacity} from '@utils';

export default StyleSheet.create({
  container: {
    backgroundColor: colorsOpacity.primary0(50),
    width: 30,
    height: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: colors.primary,
    width: 20,
    height: 20,
    borderRadius: 20,
  },
});
