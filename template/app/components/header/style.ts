import {StyleSheet} from 'react-native';
import {colors} from '@utils';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    marginLeft: 30,
  },
});
