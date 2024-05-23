import {View, ScrollView, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';

// Components
import ScreenHeader from '../Components/Headers/ScreenHeader';
import CustomText from '../Components/CustomText';
import OrderCard from '../Components/Cards/OrderCard';

const OrdersScreen = ({}) => {
  const [loading, setLoading] = useState(true);
  const hu = false;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <ScreenHeader title={'Purchases'} />

      {loading ? (
        <ActivityIndicator size={40} color={'#000'} />
      ) : (
        <>
          {hu ? (
            <View
              style={{
                justifyContent: 'center',
                paddingHorizontal: 20,
                height: '70%',
              }}>
              <CustomText styles={{fontSize: 20}}>
                Nothing to see here yet,
              </CustomText>
              <CustomText
                styles={{
                  fontSize: 16,
                  color: '#78716C',
                  marginTop: 10,
                  marginLeft: 25,
                }}>
                We'll store your purchases here as soon as you make it
              </CustomText>
            </View>
          ) : (
            <ScrollView
              style={{flex: 1, paddingHorizontal: 20}}
              showsVerticalScrollIndicator={false}>
              <OrderCard />
            </ScrollView>
          )}
        </>
      )}
    </View>
  );
};

export default OrdersScreen;
