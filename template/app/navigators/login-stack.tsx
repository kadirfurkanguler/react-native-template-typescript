import * as React from 'react';
import {TestScreen} from '@screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {AppDrawerNavigator} from '@navigators';

const Stack = createNativeStackNavigator();

export const LoginStack = () => {
  const {isAuthenticated} = useSelector((state: any) => state.auth);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAuthenticated === '1' ? (
          <Stack.Screen name="app" component={AppDrawerNavigator} />
        ) : (
          <>
            <Stack.Screen name="login-screen" component={TestScreen} />
            <Stack.Screen name="register-screen" component={TestScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
