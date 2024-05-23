import FastImage from 'react-native-fast-image';
import {View} from 'react-native';
import React from 'react';

// COMPONENTS
import CustomButton from '../Buttons/Button';
import CustomText from '../CustomText';

const NewProductCard = ({uri, heading, subHeading, title}) => {
  return (
    <View>
      <FastImage
        source={{
          uri: uri,
          priority: FastImage.priority.low,
        }}
        style={{
          width: '100%',
          height: 500,
          marginTop: 15,
          marginBottom: 10,
        }}
      />
      <View style={{position: 'absolute', bottom: 40, left: 20}}>
        <CustomText styles={{fontSize: 16, color: '#fff'}}>
          {heading}
        </CustomText>
        <CustomText
          extra
          styles={{
            fontSize: 45,
            color: '#fff',
            lineHeight: 43,
            marginTop: 15,
          }}>
          {subHeading}
        </CustomText>
        <CustomButton
          style={{
            marginTop: 15,
            width: 170,
            backgroundColor: '#fff',
            paddingVertical: 10,
          }}
          textStyle={{color: '#000', fontSize: 16}}
          title={title}
        />
      </View>
    </View>
  );
};

export default NewProductCard;
