import * as React from 'react';
import {View, Text} from 'react-native';
import {t} from '@languages';

export const TestScreen = () => {
  return (
    <View>
      <Text>{t('welcome')}</Text>
    </View>
  );
};
