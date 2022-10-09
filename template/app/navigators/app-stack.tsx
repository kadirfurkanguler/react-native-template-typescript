import * as React from 'react';
import {TestScreen} from '@screens';
import {AppBottomTab} from '@navigators';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="home-tab"
        component={AppBottomTab}
      />
      <Stack.Screen name="test-screen" component={TestScreen} />
    </Stack.Navigator>
  );
};
