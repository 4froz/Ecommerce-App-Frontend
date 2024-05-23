import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';

//components
import CustomText from '../CustomText';

function getRandomHexColor() {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return `#${hex.padStart(6, '0')}`;
}

const SmallProductCard = ({item, small, medium}) => {
  const randomColor = getRandomHexColor();
  const randomColor1 = getRandomHexColor();
  const randomColor2 = getRandomHexColor();
  const randomColor3 = getRandomHexColor();

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate('Product')}
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        width: !small ? 140 : '30%' || (medium && 'auto'),
      }}>
      <FastImage
        resizeMode="cover"
        style={{width: '100%', height: !small ? 160 : 100, borderRadius: 5}}
        source={{
          uri: item.image,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.low,
        }}
      />
      <CustomText
        numberOfLines={!small ? 1 : 10}
        styles={{marginTop: 10, fontSize: 14}}>
        {item.name}
      </CustomText>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <View
          style={[
            {width: 15, height: 15, borderRadius: 50},
            {backgroundColor: randomColor},
          ]}
        />
        <View
          style={[
            {width: 15, height: 15, borderRadius: 50, marginLeft: 5},
            {backgroundColor: randomColor1},
          ]}
        />
        <View
          style={[
            {width: 15, height: 15, borderRadius: 50, marginLeft: 5},
            {backgroundColor: randomColor2},
          ]}
        />
        <View
          style={[
            {width: 15, height: 15, borderRadius: 50, marginLeft: 5},
            {backgroundColor: randomColor3},
          ]}
        />
      </View>
      <CustomText bold styles={{fontSize: 14, color: '#78716C'}}>
        ${item.price}
      </CustomText>
    </TouchableOpacity>
  );
};

export default SmallProductCard;
