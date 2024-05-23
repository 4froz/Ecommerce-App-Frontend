import {View, ScrollView, Image, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';

// Components
import ScreenHeader from '../Components/Headers/ScreenHeader';
import CustomText from '../Components/CustomText';
import OrderItemCard from '../Components/Cards/OrderItemCard';

const OrderScreen = ({navigation}) => {
  const order = {
    _id: '1234567890abcdef',
    createdAt: '2023-05-20T14:30:00Z',
    deliveryStatus: 'processing',
    paymentMethod: 'Credit Card',
    shippingAddress: {
      address: '123 Main St',
      city: 'Metropolis',
      postalCode: '123456',
    },
    mobileNumber: '1234567890',
    user: {
      email: 'user@example.com',
    },
    orderItems: [
      {
        image:
          'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/26221b38-df8a-4c31-9dff-7258eb739d55/tatum-2-older-basketball-shoes-xBsSqd.png',
        name: 'Nike ZoomX Vaporfly',
        subQty: 2,
        category: 'Eggs',
        price: 49.99,
      },
      {
        image:
          'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/78da61b0-ba14-47b6-9e7f-7b21139b0bee/zion-3-rising-pf-basketball-shoes-txLZ0h.png',
        name: 'Adidas NMD R1',
        subQty: 1,
        category: 'Dairy',
        price: 29.99,
      },
    ],
    itemsPrice: 79.98,
    totalPrice: 79.98,
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScreenHeader title={'Order'} />

      {loading ? (
        <ActivityIndicator size={40} color={'#000'} />
      ) : (
        <ScrollView>
          {/* Order Details */}
          <View style={{borderBottomWidth: 1, borderColor: '#F4F4F4'}}>
            <View style={{padding: 20, paddingTop: 10}}>
              <CustomText bold styles={{fontSize: 17}}>
                Order ID: {order._id.toString().substr(0, 10)}
              </CustomText>
              <CustomText
                styles={{
                  fontSize: 14,
                  transform: [{translateY: 5}],
                  color: '#78716C',
                }}>
                Ordered On: 1 Oct 2024
              </CustomText>
              <View style={{flexDirection: 'row'}}>
                <CustomText styles={{fontSize: 14, color: '#78716C'}}>
                  Status:
                </CustomText>
                <CustomText
                  bold
                  styles={{
                    color: '#4F6CE8',
                    fontSize: 14,
                    marginLeft: 5,
                  }}>
                  {order.deliveryStatus.charAt(0).toUpperCase() +
                    order.deliveryStatus.slice(1)}
                </CustomText>
              </View>
            </View>
          </View>
          {/* Payement Details */}
          <View style={{borderBottomWidth: 1, borderColor: '#F4F4F4'}}>
            <View style={{padding: 20}}>
              <CustomText bold styles={{fontSize: 17}}>
                Payment Method
              </CustomText>
              <View
                style={{
                  flexDirection: 'row',
                  transform: [{translateY: 5}],
                }}>
                <CustomText styles={{fontSize: 14, color: '#78716C'}}>
                  Payment Method:
                </CustomText>
                <CustomText bold styles={{fontSize: 14, marginLeft: 5}}>
                  {order.paymentMethod}
                </CustomText>
              </View>
            </View>
          </View>

          {/* Address Details */}
          <View style={{borderBottomWidth: 1, borderColor: '#F4F4F4'}}>
            <View style={{padding: 20}}>
              <CustomText bold styles={{fontSize: 17}}>
                Delivery Address
              </CustomText>
              <View
                style={{
                  flexDirection: 'row',
                  transform: [{translateY: 5}],
                }}>
                <CustomText styles={{fontSize: 14}}>
                  {order.shippingAddress.address},{order.shippingAddress.city},
                  {order.shippingAddress.postalCode}
                </CustomText>
              </View>
            </View>
          </View>

          {/* Order Items */}
          <View style={{borderBottomWidth: 1, borderColor: '#F4F4F4'}}>
            <View style={{padding: 20}}>
              <CustomText bold styles={{fontSize: 17, marginBottom: 10}}>
                Ordered Items
              </CustomText>
              {order.orderItems.map(item => (
                <OrderItemCard item={item} />
              ))}
            </View>
          </View>

          {/* Order Summary */}
          <View style={{borderBottomWidth: 1, borderColor: '#F4F4F4'}}>
            <View style={{padding: 20}}>
              <CustomText bold styles={{fontSize: 17}}>
                Ordered Summary
              </CustomText>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View>
                  <CustomText styles={{fontSize: 12}}>
                    Subtotal ₹{order.itemsPrice}
                  </CustomText>
                  <CustomText styles={{fontSize: 12}}>Shipping ₹0</CustomText>
                </View>
                <CustomText
                  bold
                  styles={{
                    fontSize: 20,
                    color: '#000',
                  }}>
                  ₹{order.totalPrice}
                </CustomText>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default OrderScreen;
