import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Header, Demo} from '@components';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '@utils';

const Tab = createBottomTabNavigator();

export const AppBottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="home-servis"
      screenOptions={({route}) => ({
        headerShown: true,
        header: () => <Header />,
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {display: 'none'},
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: colors.black,
          borderTopWidth: 0,
        },
        tabBarIcon: ({color}) => {
          let iconName = '';
          if (route.name === 'home-screen') {
            iconName = 'home';
          } else if (route.name === 'upcoming-services-screen') {
            iconName = 'clipboard-text-outline';
          } else if (route.name === 'notification-screen') {
            iconName = 'bell-outline';
          } else if (route.name === 'settings-screen') {
            iconName = 'cog-outline';
          }
          return <Icon name={iconName} size={25} color={color} />;
        },
      })}>
      <Tab.Screen name="home-screen" component={Demo} />
      <Tab.Screen name="upcoming-services-screen" component={Demo} />
      <Tab.Screen
        options={() => ({
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.usContainer,
                {borderColor: focused ? colors.primary : colors.white},
              ]}>
              <Text
                style={[
                  styles.usText,
                  {color: focused ? colors.primary : colors.white},
                ]}>
                kfg
              </Text>
            </View>
          ),
        })}
        name="us-screen"
        component={Demo}
      />
      <Tab.Screen name="notification-screen" component={Demo} />
      <Tab.Screen name="settings-screen" component={Demo} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  usContainer: {
    borderWidth: 3,
    borderRadius: 100,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    backgroundColor: colors.black,
  },
  usText: {fontSize: 25},
});
