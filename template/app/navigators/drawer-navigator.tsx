import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AppStack} from '@navigators';
import Animated from 'react-native-reanimated';
import {useDrawerProgress} from '@react-navigation/drawer';
import getDrawerStyles from './drawer-styles';

const Drawer = createDrawerNavigator();

export const AppDrawerNavigator = () => {
  return (
    <LinearGradient
      colors={[
        '#EF5314',
        '#EF5A17',
        '#F68C2C',
        '#FBB03B',
        '#FDC644',
        '#FFCF48',
      ]}
      style={style.gradient}>
      <Drawer.Navigator
        useLegacyImplementation
        screenOptions={{
          overlayColor: 'transparent',
          drawerStyle: {
            flex: 1,
            backgroundColor: 'transparent',
            zIndex: 1,
            width: '65%',
          },
          headerShown: false,
          drawerType: 'slide',
        }}
        drawerContent={CustomDrawerContent}>
        <Drawer.Screen name="dealer-stack">
          {() => {
            return (
              <AnimateScreen>
                <AppStack />
              </AnimateScreen>
            );
          }}
        </Drawer.Screen>
      </Drawer.Navigator>
    </LinearGradient>
  );
};
function CustomDrawerContent() {
  return (
    <View style={style.contentContainer}>
      <LinearGradient
        colors={[
          '#EF5314',
          '#EF5A17',
          '#F68C2C',
          '#FBB03B',
          '#FDC644',
          '#FFCF48',
        ]}
        style={style.gradient}
      />
    </View>
  );
}

const AnimateScreen = ({children, ...rest}: any) => {
  const progress = useDrawerProgress();
  const {borderRadius, scaleX, scaleY, scaleXV2, scaleYV2, scaleXV3, scaleYV3} =
    getDrawerStyles(progress);
  return (
    <View {...rest} style={style.contentContainer}>
      <LinearGradient
        colors={[
          '#EF5314',
          '#EF5A17',
          '#F68C2C',
          '#FBB03B',
          '#FDC644',
          '#FFCF48',
        ]}
        style={style.gradient}>
        <View style={style.animateContainer}>
          <Animated.View
            style={[
              style.animateView3,
              {
                transform: [{scaleY: scaleYV3}, {scaleX: scaleXV3}],
                borderRadius,
              },
            ]}
          />
          <Animated.View
            style={[
              style.animateView2,
              {
                transform: [{scaleY: scaleYV2}, {scaleX: scaleXV2}],
                borderRadius,
              },
            ]}
          />
          <Animated.View
            style={[
              style.animateView1,
              {
                transform: [{scaleY}, {scaleX}],
                borderRadius,
              },
            ]}>
            {children}
          </Animated.View>
        </View>
      </LinearGradient>
    </View>
  );
};

const style = StyleSheet.create({
  contentContainer: {flex: 1, backgroundColor: '#feac02'},
  drawerContainer: {flex: 1, backgroundColor: '#feac02'},
  gradient: {flex: 1},
  animateContainer: {
    flex: 1,
    justifyContent: 'space-between',
    overflow: 'visible',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  animateView1: {
    flex: 1,
    overflow: 'hidden',
  },
  animateView2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  animateView3: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
});
