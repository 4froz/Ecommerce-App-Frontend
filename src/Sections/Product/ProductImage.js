import FastImage from 'react-native-fast-image';
import {View, Text} from 'react-native';
import React from 'react';

//Component
import CustomText from '../../Components/CustomText';

const ProductImage = ({specification,selectedSize}) => {
  return (
    <View>
      {/* Image */}
      <FastImage
        style={{width: '100%', height: 280}}
        source={{
          uri: specification ? specification.uri : null,
          priority: FastImage.priority.low,
        }}
      />

      {/* Product not available text */}
      <View style={{position: 'absolute', bottom: 10, left: 10}}>
        {!specification?.available && (
          <CustomText bold styles={{color: 'red', fontSize: 16}}>
            Color not available
          </CustomText>
        )}
        {!selectedSize.available && (
          <CustomText bold styles={{color: 'red', fontSize: 16, marginTop: 10}}>
            Size not Available
          </CustomText>
        )}
      </View>
    </View>
  );
};

export default ProductImage;
