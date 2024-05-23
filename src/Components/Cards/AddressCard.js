import {View, TouchableOpacity} from 'react-native';
import React from 'react';

//compo
import CustomText from '../CustomText';

const AddressCard = () => {
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            width: 20,
            height: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            borderWidth: 1,
            borderColor: '#a4a4a4',
          }}>
          <View
            style={{
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              backgroundColor: '#4F6CE8',
            }}
          />
        </View>
        <CustomText
          styles={{
            fontSize: 14,
            color: '#78716C',
            width: '80%',
            marginLeft: 10,
            lineHeight: 18,
          }}>
          Flat No. 503, B-Wing, Sai Residency Apartments, Mumbai, Maharashtra,
          400028
        </CustomText>
      </View>
      <View
        style={{
          borderBottomWidth: 1.3,
          borderColor: '#ededed',
          height: 5,
          width: '100%',
          marginTop: 10,
        }}
      />
    </TouchableOpacity>
  );
};

export default AddressCard;
