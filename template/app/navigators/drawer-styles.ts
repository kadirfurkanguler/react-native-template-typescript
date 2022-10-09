import Animated from 'react-native-reanimated';
const getDrawerStyles = (progress: any) => {
  const scaleY = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.7],
  });
  const scaleYV2 = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.6],
  });
  const scaleYV3 = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.5],
  });

  const scaleX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.7],
  });
  const scaleXV2 = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.75],
  });
  const scaleXV3 = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const scaleXDrawerContent = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0.1, 4],
  });
  const scaleDrawerContent = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 1.4],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  });
  const width = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: ['100%', '110%'],
  });
  // const rotate = Animated.interpolateNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: ['0deg', '-10deg'],
  // });
  return {
    scaleY,
    scaleYV2,
    scaleYV3,
    scaleX,
    scaleXV2,
    scaleXV3,
    borderRadius,
    scaleXDrawerContent,
    width,
    scaleDrawerContent,
    // rotate,
  };
};
export default getDrawerStyles;
