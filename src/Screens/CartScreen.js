import React, {memo, useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

// Components
import AddSelectModal from '../Components/Modals/AddSelectModal';
import ScreenHeader from '../Components/Headers/ScreenHeader';
import CartItemCard from '../Components/Cards/CartItemCard';
import Bill from '../Sections/Cart/Bill';
import Checkout from '../Sections/Cart/Checkout';

const CartScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [show, setshow] = useState(false);

  // loading
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
      <ScreenHeader title={'Bag'} />
      {loading ? (
        <ActivityIndicator size={40} color={'#000'} />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{paddingHorizontal: 20}}>
          <CartItemCard />

          <Bill />
        </ScrollView>
      )}
      <Checkout setshow={setshow} />
      <AddSelectModal showModal={show} setShow={setshow} />
    </View>
  );
};

export default memo(CartScreen);
