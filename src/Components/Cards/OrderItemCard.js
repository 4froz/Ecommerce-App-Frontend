import FastImage from 'react-native-fast-image';
import {View} from 'react-native';
import React from 'react';

// Components
import CustomText from '../CustomText';

const OrderItemCard = ({item}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <FastImage
          source={{uri: item.image}}
          style={{
            width: 60,
            height: 60,
            marginRight: 10,
            borderRadius: 10,
          }}
        />
        <View>
          <CustomText bold>{item.name}</CustomText>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CustomText>Color:</CustomText>
              <View
                style={[
                  {
                    width: 15,
                    height: 15,
                    borderRadius: 50,
                    marginLeft: 5,
                  },
                  {backgroundColor: '#FE6CB1'},
                ]}
              />
            </View>
            <CustomText styles={{marginLeft: 5}}>Size: 34</CustomText>
          </View>
          <CustomText styles={{}}>Oty: {item.qty}</CustomText>
        </View>
      </View>
      <View style={{justifyContent: 'flex-end'}}>
        <CustomText bold styles={{color: '#000'}}>
          ₹{item.price}
        </CustomText>
      </View>
    </View>
  );
};

export default OrderItemCard;
