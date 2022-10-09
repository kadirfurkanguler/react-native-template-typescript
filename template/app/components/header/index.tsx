import React from 'react';
import {View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import {Logo} from '@assets';
import {colors} from '@utils';
import style from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Header = () => {
  const navigation = useNavigation<any>();
  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <View style={style.container}>
      <Image style={style.image} source={Logo} />
      <TouchableOpacity onPress={openDrawer}>
        <Icon name="menu" size={30} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};
