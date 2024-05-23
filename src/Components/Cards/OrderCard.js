import {useNavigation} from '@react-navigation/native';
import {View, TouchableOpacity} from 'react-native';
import React from 'react';

// Components
import CustomText from '../CustomText';

const OrderCard = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Order')}
      activeOpacity={0.6}
      style={{
        width: '100%',
        padding: 20,
        backgroundColor: '#F7F5F7',
        borderRadius: 10,
        paddingHorizontal: 20,
        marginTop: 10,
        borderWidth: 1.5,
        borderColor: '#ededed',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {/* <Icon name="pricetag-outline" size={25} color="#000" /> */}
        <View style={{}}>
          <CustomText bold styles={{fontSize: 14, color: '#78716C'}}>
            Order
          </CustomText>
          <CustomText styles={{fontSize: 16}} bold>
            AAA956
          </CustomText>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          justifyContent: 'space-between',
        }}>
        <View style={{}}>
          <CustomText bold styles={{fontSize: 14, color: '#4F6CE8'}}>
            Shipment on the way
          </CustomText>
          <CustomText styles={{fontSize: 16}} bold>
            1 Sept 2024
          </CustomText>
        </View>

        <View style={{}}>
          <CustomText bold styles={{fontSize: 14, color: '#78716C'}}>
            Total
          </CustomText>
          <CustomText styles={{fontSize: 16}} bold>
            ₹55,546
          </CustomText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderCard;
