import Icon from 'react-native-vector-icons/Ionicons';
import {View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import React, {useState} from 'react';

// Components
import CustomText from '../CustomText';

const CartItemCard = ({item}) => {
  const specs = [
    {
      color: '#1B5350',
      uri: 'https://static.nike.com/a/images/t_default/60727439-460b-4814-9ed8-77b8ad3e66a8/dunk-low-shoes-wbxcmN.png',
      available: false,
      sizes: [
        {size: 38, available: false},
        {size: 39, available: true},
        {size: 42, available: true},
        {size: 48, available: true},
        {size: 52, available: true},
      ],
    },
    {
      color: '#C82A39',
      available: false,
      uri: 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bcc75d29-e70d-4beb-9615-dd7761e18b90/jordan-max-aura-5-shoes-ZBZ4Pz.png',
      sizes: [
        {size: 38, available: false},
        {size: 39, available: true},
        {size: 42, available: true},
        {size: 48, available: true},
        {size: 52, available: true},
      ],
    },
    {
      color: '#A2B3CB',
      uri: 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/93a5b911-d056-47f8-9d05-c8da78b15c6a/backpack-JlJBNw.png',
      available: true,
      sizes: [
        {size: 38, available: true},
        {size: 39, available: true},
        {size: 42, available: true},
        {size: 48, available: true},
        {size: 52, available: true},
      ],
    },
    {
      color: '#E0AAAC',
      available: true,
      uri: 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/24e6bbc2-64af-4449-ace6-09d154a69484/dunk-low-older-shoes-mxH1lh.png',
      sizes: [
        {size: 38, available: false},
        {size: 39, available: true},
        {size: 42, available: true},
        {size: 48, available: true},
      ],
    },
  ];
  const [specification, setSpecs] = useState(specs[0]);
  const [selectedSize, setSize] = useState(specs[0].sizes[0]);

  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 115,
        marginTop: 25,
        borderColor: '#a4a4a4',
      }}>
      <FastImage
        resizeMode="cover"
        style={{
          width: '32%',
          height: '100%',
          borderRadius: 10,
        }}
        source={{
          uri: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/26221b38-df8a-4c31-9dff-7258eb739d55/tatum-2-older-basketball-shoes-xBsSqd.png',
          priority: FastImage.priority.low,
        }}
      />
      <View
        style={{
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          paddingRight: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <CustomText bold numberOfLines={1} styles={{fontSize: 16}}>
            Adidas Ultraboost 21
          </CustomText>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <CustomText
            styles={{
              fontSize: 14,
              color: '#78716C',
              marginRight: 5,
            }}>
            MRP :
          </CustomText>

          <CustomText bold styles={{fontSize: 14, color: '#000'}}>
            ₹500
          </CustomText>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 5,
              height: 28,
              marginTop: 5,
              borderColor: 'transparent',
              justifyContent: 'space-between',
              backgroundColor: '#000',
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 28,
              }}>
              <Icon name="add" size={20} color={'#fff'} />
            </TouchableOpacity>
            <View
              style={{
                height: '100%',
                backgroundColor: '#F2F2F2',
                alignItems: 'center',
                justifyContent: 'center',
                width: 28,
              }}>
              <CustomText styles={{fontSize: 14}}>1</CustomText>
            </View>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                width: 28,
              }}>
              <Icon name="remove" size={20} color={'#fff'} />
            </TouchableOpacity>
          </View>
        </View>

        <CustomText
          styles={{
            fontSize: 14,
            color: '#0057ff',
            marginTop: 5,
          }}>
          Change Size & Color
        </CustomText>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
        style={{position: 'relative'}}>
        <Icon name="close-circle-outline" size={30} color={'black'} />
      </TouchableOpacity>
    </View>
  );
};

export default CartItemCard;
