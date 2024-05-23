import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React, {useEffect, useState} from 'react';

// Components
import ScreenHeader from '../Components/Headers/ScreenHeader';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/Buttons/Button';
import OrderItemCard from '../Components/Cards/OrderItemCard';
import Bill from '../Sections/Cart/Bill';

const Checkout = ({navigation}) => {
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(true);

  const userInfo = {
    name: 'John Doe',
    number: '123-456-7890',
    emailAddress: 'john.doe@example.com',
  };

  const cart = {
    shippingAddress: {
      address: '123 Main St',
      city: 'New York',
      postalCode: '10001',
    },
    cartItems: [
      {
        product: '1',
        name: 'Product 1',
        image:
          'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/644c0bb7-a1bb-459b-9a22-a4aac28e3b1a/jordan-spizike-low-shoes-pBZk7c.png',
        price: 100,
        qty: 2,
        subQty: 1,
        category: 'Eggs',
      },
      {
        product: '2',
        name: 'Product 2',
        image:
          'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/26221b38-df8a-4c31-9dff-7258eb739d55/tatum-2-older-basketball-shoes-xBsSqd.png',
        price: 200,
        qty: 1,
        subQty: 1,
        category: 'Other',
      },
    ],
    itemsPrice: 400,
    totalPrice: 400,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScreenHeader title={'Preview'} />
      {loading ? (
        <ActivityIndicator size={40} color={'#000'} />
      ) : (
        <ScrollView
          style={{paddingHorizontal: 20}}
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              borderBottomWidth: 1,
              paddingBottom: 10,
              borderBottomColor: '#f4f4f4',
              marginTop: 20,
            }}>
            {/* Address */}
            <TouchableOpacity
              onPress={() => setToggle(!toggle)}
              activeOpacity={0.8}
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <CustomText bold styles={{fontSize: 18}}>
                Shipping Address
              </CustomText>
              <Icon name="chevron-forward" size={20} color="black" />
            </TouchableOpacity>
            {toggle && (
              <View style={{padding: 10, marginTop: 10}}>
                <View style={{flexDirection: 'row'}}>
                  <CustomText normal>Name: </CustomText>
                  <CustomText normal styles={{marginLeft: 10}}>
                    {userInfo.name}
                  </CustomText>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <CustomText normal>Address: </CustomText>
                  <CustomText normal styles={{marginLeft: 10}}>
                    {cart.shippingAddress.address}
                  </CustomText>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <CustomText normal>City: </CustomText>
                  <CustomText normal styles={{marginLeft: 10}}>
                    {cart.shippingAddress.city}
                  </CustomText>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <CustomText normal>Postal Code: </CustomText>
                  <CustomText normal styles={{marginLeft: 10}}>
                    {cart.shippingAddress.postalCode}
                  </CustomText>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <CustomText normal>Phone Number: </CustomText>
                  <CustomText normal styles={{marginLeft: 10}}>
                    {userInfo.number}
                  </CustomText>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <CustomText normal>Email Address: </CustomText>
                  <CustomText normal styles={{marginLeft: 10}}>
                    {userInfo.emailAddress}
                  </CustomText>
                </View>
              </View>
            )}
          </View>

          {/* Order */}
          <View
            style={{
              borderBottomWidth: 1,
              paddingBottom: 10,
              borderBottomColor: '#f4f4f4',
            }}>
            <CustomText
              bold
              styles={{
                fontSize: 18,
                marginVertical: 20,
                marginBottom: 10,
              }}>
              Order Details
            </CustomText>
            {cart.cartItems.map(item => (
              <OrderItemCard item={item} />
            ))}
          </View>

          {/* Bill */}
          <Bill style={{marginBottom: 0}} />

          <CustomButton
            textStyle={{fontSize: 16}}
            style={{elevation: 0, marginTop: 40, paddingVertical: 13}}
            title={'Continue to Payment'}
            onPress={() => navigation.navigate('Payment')}
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
              Change Address
            </CustomText>
          </TouchableOpacity>
        </ScrollView>
      )}
    </View>
  );
};

export default Checkout;
