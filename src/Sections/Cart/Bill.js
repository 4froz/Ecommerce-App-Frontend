import {View, Text} from 'react-native';
import React from 'react';
import CustomText from '../../Components/CustomText';

const Bill = ({style}) => {
  return (
    <View
      style={{
        alignSelf: 'center',
        width: '100%',
        padding: 16,
        borderWidth: 1,
        borderStyle: 'dashed',
        marginTop: 40,
        marginBottom: 200,
        ...style
      }}>
      <CustomText bold style={{fontSize: 16, color: '#000'}}>
        BILL DETAILS
      </CustomText>

      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 5,
        }}>
        <CustomText style={{fontSize: 14, color: '#a6a6a6'}}>
          Subtotal
        </CustomText>
        <CustomText style={{fontSize: 14, color: '#a6a6a6'}}>₹100</CustomText>
      </View>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderColor: '#f4f4f4',
          paddingBottom: 12,
        }}>
        <CustomText style={{fontSize: 14, color: '#a6a6a6'}}>
          Delivery Charge
        </CustomText>
        <CustomText style={{fontSize: 14, color: 'green'}}>Free</CustomText>
      </View>

      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 12,
          marginBottom: 5,
        }}>
        <CustomText bold style={{fontSize: 16, color: '#000'}}>
          Total
        </CustomText>

        <CustomText bold style={{fontSize: 16, color: '#DB003E'}}>
          ₹100
        </CustomText>
      </View>
    </View>
  );
};

export default Bill;
