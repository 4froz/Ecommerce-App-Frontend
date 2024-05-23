import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, TouchableOpacity} from 'react-native';
import React from 'react';

//Components
import CustomText from '../../Components/CustomText';
import CustomButton from '../../Components/Buttons/Button';

const Checkout = ({setshow}) => {
  const navigation = useNavigation();
  const hu = true;
  return (
    <View
      style={{
        position: 'absolute',
        elevation: 20,
        bottom: 0,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 15,
        width: '100%',
      }}>
      {/* Address */}
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => setshow(true)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-between',
        }}>
        {hu ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon
              name="location-outline"
              size={18}
              color={'black'}
              style={{transform: [{translateY: 1}]}}
            />
            <CustomText
              bold
              numberOfLines={1}
              styles={{
                fontSize: 16,
                color: '#000',
                width: '80%',
                marginLeft: 3,
              }}>
              Flat No. 503, B-Wing, Sai Residency Apartments, Mumbai,
              Maharashtra, 400028
            </CustomText>
          </View>
        ) : (
          <CustomText
            bold
            numberOfLines={1}
            styles={{
              fontSize: 16,
              color: '#000',
              width: '80%',
              marginLeft: 3,
            }}>
            Add a Address
          </CustomText>
        )}
        <Icon
          name="chevron-forward"
          size={18}
          color={'black'}
          style={{transform: [{translateY: 1}]}}
        />
      </TouchableOpacity>
      <CustomButton
        disabled={!hu}
        textStyle={{fontSize: 16}}
        style={{elevation: 0, marginTop: 20, paddingVertical: 13}}
        title={'Checkout'}
        onPress={() => navigation.navigate('Checkout')}
      />
    </View>
  );
};

export default Checkout;
