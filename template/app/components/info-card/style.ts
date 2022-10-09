import {StyleSheet} from 'react-native';
import {colors} from '@utils';

export default StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  header: {
    backgroundColor: colors.lightBlack,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
  },
  content: {
    backgroundColor: colors.lightBlack,
    padding: 0,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  key: {
    color: colors.gray,
  },
  value: {
    color: colors.white,
  },
  icon: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  flatlistContiner: {
    backgroundColor: colors.lightBlack,
    borderRadius: 5,
    borderTopRightRadius: 0,
    padding: 10,
  },
  contentTitle: {
    color: colors.gray,
    fontSize: 12,
  },
  contentDesc: {
    color: colors.white,
  },
  contentTexts: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    paddingVertical: 10,
  },
});
