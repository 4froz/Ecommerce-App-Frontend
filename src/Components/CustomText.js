import { Text } from 'react-native';
import React from 'react';

const CustomText = ({
  bold,
  extra,
  normal,
  semibold,
  styles,
  numberOfLines,
  onPress,
  children,
}) => {
  return (
    <Text
      onPress={onPress}
      numberOfLines={numberOfLines}
      style={{
        fontFamily:extra
        ? 'HelveticaNowDisplay-Black'
        : bold
          ? 'HelveticaNowDisplay-Bold'
          : semibold
          ? 'HelveticaNowDisplay-Regular'
          : 'HelveticaNowDisplay-Regular',
        color: 'black',
        ...styles,
      }}
    >
      {children}
    </Text>
  );
};

export default CustomText;
