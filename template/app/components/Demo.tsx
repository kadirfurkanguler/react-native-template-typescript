import * as React from 'react';
import {View} from 'react-native';
import {Button, InfoCard, TextInput} from '@components';
export const Demo = () => {
  return (
    <View>
      <View>
        <Button
          color="white"
          leftIcon="close"
          text="app_name"
          preset="primary"
        />
        <InfoCard
          header={{key: 'no', value: '1905123123'}}
          contents={[
            {
              title: 'title3',
              content: 'content',
              icon: 'orange-dot',
            },
          ]}
        />
        <TextInput isPassword />
      </View>
    </View>
  );
};
