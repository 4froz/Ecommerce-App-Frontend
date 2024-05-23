import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import React from 'react';

//components
import CustomText from '../CustomText';

const ScreenHeader = ({title, headerRightIcon, cart}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
        paddingTop: 30,
        paddingBottom: 0,
        alignSelf: 'flex-start',
        width: '100%',
        backgroundColor: '#fff',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{position: 'relative'}}>
          <FastImage
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3114/3114883.png',
              priority: FastImage.priority.low,
            }}
            resizeMode="contain"
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>

        <CustomText bold styles={{fontSize: 16, marginLeft: 18}}>
          {title}
        </CustomText>
      </View>
      {/* Cart */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}
          style={{position: 'relative'}}>
          <Icon name={headerRightIcon} size={30} color={'black'} />
          {cart && (
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
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScreenHeader;
