import React, { useEffect } from 'react';
import Reanimated2 from 'react-native-reanimated'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
function AnimatedView({ styles, marginLeft }) {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      // scaleX: withSpring(offset.value),
      transform: [{
        translateX: withSpring(marginLeft),
      }]
    };
  });
  useEffect(() => {
    if (marginLeft) {
      // offset.value = withSpring(marginLeft, {damping: 20}, (finished) => {
      //   if (finished) {
      //     console.log('ANIMATION ENDED');
      //   } else {
      //     console.log('ANIMATION GOT CANCELLED');
      //   }
      // });
    }
  }, [marginLeft]);
  return (
    <>
      <Animated.View style={[styles, animatedStyles]} />
    </>
  );
}

export default AnimatedView;
