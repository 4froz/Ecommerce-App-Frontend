import {View, TouchableOpacity} from 'react-native';
import React from 'react';

// Components
import CustomText from '../../Components/CustomText';

const PaymentSelector = ({
  paymentMethod,
  setPaymentMethod,
  paymentType,
  title,
  subTitle,
}) => {
  return (
    <View style={{width: '100%', marginTop: 20}}>
      <TouchableOpacity
        onPress={() => setPaymentMethod(paymentType)}
        activeOpacity={0.8}
        style={{
          width: '100%',
          padding: 10,
          paddingHorizontal: 15,
          backgroundColor: paymentMethod === paymentType ? '#ededed' : '#fff',
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          marginTop: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {paymentMethod === paymentType ? (
            <View
              style={{
                width: 20,
                height: 20,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
                borderWidth: 1,
                borderColor: '#a4a4a4',
                marginRight: 10,
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
          ) : (
            <View
              style={{
                width: 20,
                marginRight: 10,
                height: 20,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
                borderWidth: 1,
                borderColor: '#a4a4a4',
              }}></View>
          )}
          <CustomText bold>{title}</CustomText>
        </View>
      </TouchableOpacity>
      {paymentMethod === paymentType && (
        <View
          style={{
            width: '100%',
            backgroundColor: '#F9FAFB',
            padding: 15,
            paddingHorizontal: 15,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
          }}>
          <CustomText normal styles={{fontSize: 12}}>
            {subTitle}
          </CustomText>
        </View>
      )}
    </View>
  );
};

export default PaymentSelector;
