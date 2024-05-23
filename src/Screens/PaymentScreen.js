import {
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {memo, useEffect, useState} from 'react';

// components
import ScreenHeader from '../Components/Headers/ScreenHeader';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/Buttons/Button';
import PaymentSelector from '../Sections/Payment/PaymentSelector';

const Payment = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('Online Payment');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScreenHeader title={'Payment'} />
      {loading ? (
        <ActivityIndicator size={40} color={'#000'} />
      ) : (
        <ScrollView
          style={{paddingHorizontal: 20}}
          showsVerticalScrollIndicator={false}>
          <View style={{width: '100%', alignItems: 'center'}}>
            <CustomText
              bold
              styles={{fontSize: 18, alignSelf: 'flex-start', marginTop: 20}}>
              Choose a Payment Mehod
            </CustomText>

            <PaymentSelector
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              paymentType={'Online Payment'}
              title={'Online Payment'}
              subTitle={
                'Pay via Online Payment; you can pay with Cards, UPI and more.'
              }
            />
            <PaymentSelector
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              paymentType={'COD'}
              title={'Cash On Delivery'}
              subTitle={'Pay via Cash on Delivery'}
            />

            <CustomButton
              textStyle={{fontSize: 16}}
              style={{elevation: 0, marginTop: 40, paddingVertical: 13}}
              title={'Pay ₹32,000'}
              onPress={() => navigation.navigate('BottomNav', {success: true})}
            />

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{alignSelf: 'center', marginTop: 5, marginBottom: 10}}>
              <CustomText
                bold
                styles={{
                  fontSize: 14,
                  color: '#4F6CE8',
                  textDecorationLine: 'underline',
                }}>
                Back to Preview
              </CustomText>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default memo(Payment);
