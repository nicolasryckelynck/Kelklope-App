import {useRef, useEffect} from "react";
import {Animated, Dimensions} from "react-native";

const ANIMATION_DURATION = 700;
const {height} = Dimensions.get("window");

const useAnimatedValue = (initialValue = 0) => {
  const animatedValue = useRef(new Animated.Value(initialValue)).current;

  useEffect(() => {
    animatedValue.setValue(initialValue);
  }, [initialValue]);

  return animatedValue;
};

const interpolateAnimation = (animatedValue, inputRange, outputRange) => {
  return animatedValue.interpolate({
    inputRange,
    outputRange,
  });
};

const animateValue = (
  animatedValue,
  toValue,
  duration = ANIMATION_DURATION
) => {
  return Animated.timing(animatedValue, {
    toValue,
    duration,
    useNativeDriver: true,
  }).start();
};

export const useAnimation = () => {
  const YOptionsConnection = useAnimatedValue();
  const YPositionDiscoverButton = useAnimatedValue();
  const YPositionRightArrow = useAnimatedValue();
  const YPositionLeftArrow = useAnimatedValue();
  const YPositionLogo = useAnimatedValue();
  const YPositionEinstein = useAnimatedValue();
  const YPositionOrangeCircle = useAnimatedValue();
  const YPositionWhiteCircle = useAnimatedValue();
  const YPositionBlueCircle = useAnimatedValue();

  const optionsConnection = interpolateAnimation(
    YOptionsConnection,
    [0, 1],
    [0, -height * 0.75]
  );
  const discoverButtonMovement = interpolateAnimation(
    YPositionDiscoverButton,
    [0, 1],
    [0, -height * 0.75]
  );
  const YRightArrow = interpolateAnimation(
    YPositionRightArrow,
    [0, 1],
    [0, -height * 0.75]
  );
  const YLeftArrow = interpolateAnimation(
    YPositionLeftArrow,
    [0, 1],
    [0, -height * 0.75]
  );
  const YLogo = interpolateAnimation(
    YPositionLogo,
    [0, 1],
    [0, -height * 0.75]
  );
  const YEinstein = interpolateAnimation(
    YPositionEinstein,
    [0, 1],
    [0, -height * 0.75]
  );
  const Y = interpolateAnimation(
    YPositionOrangeCircle,
    [0, 1],
    [0, -height * 0.75]
  );
  const YWhite = interpolateAnimation(
    YPositionWhiteCircle,
    [0, 1],
    [0, -height * 0.75]
  );
  const YBlue = interpolateAnimation(
    YPositionBlueCircle,
    [0, 1],
    [0, -height * 0.75]
  );

  const handleDiscoverPress = () => {
    animateValue(YPositionOrangeCircle, height * 0.0002);
    animateValue(YPositionBlueCircle, -height * 0.001, 1500);
    animateValue(YPositionWhiteCircle, -height * 0.00098, 1100);
    animateValue(YPositionEinstein, height * 0.0002);
    animateValue(YPositionLogo, height * 0.001, 1500);
    animateValue(YPositionRightArrow, height * 0.0002);
    animateValue(YPositionLeftArrow, -height * 0.00103, 1130);
    animateValue(YOptionsConnection, -height * 0.0008, 1000);
    animateValue(YPositionDiscoverButton, -height * 0.0003);
  };

  return {
    optionsConnection,
    discoverButtonMovement,
    YRightArrow,
    YLeftArrow,
    YLogo,
    YEinstein,
    Y,
    YWhite,
    YBlue,
    handleDiscoverPress,
  };
};
