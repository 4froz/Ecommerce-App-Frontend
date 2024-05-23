import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

//components
import CustomText from '../CustomText';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 5,
        // elevation:10,
        backgroundColor: '#fff',
      }}>
      {/* Logo */}
      <FastImage
        source={{
          uri: 'https://assets.spotlight.fender.com/logos/Jackson-Logo-JPG_1211322012.jpg',
          priority: FastImage.priority.low,
        }}
        resizeMode="contain"
        style={{width: 100, height: 50}}
      />
      {/* Cart */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
        style={{position: 'relative'}}>
        <Icon name="bag-outline" size={30} color={'black'} />
        <View
          style={{
            position: 'absolute',
            top: 10,
            right: 13,
            // // backgroundColor: '#000',
            // width: 18,
            // height: 18,
            borderRadius: 22,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CustomText
            bold
            styles={{
              fontSize: 12,
              color: '#000',
            }}>
            1
          </CustomText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
