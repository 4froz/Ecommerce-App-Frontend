import Icon from 'react-native-vector-icons/Ionicons';
import {View, TouchableOpacity} from 'react-native';
import React from 'react';

//components
import CustomText from '../CustomText';

const ProfileButton = ({
  onPress,
  icon,
  heading,
  subHeading,
  style,
  first,
  last,
}) => {
  return (
    <View
      style={{
        padding: 15,
        paddingBottom: last ? 16 : 0,
        paddingHorizontal: 25,
        backgroundColor: '#fff',
        marginTop: first && 40,
        ...style,
      }}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={{
          width: '100%',
          alignItems: 'center',
          borderRadius: 10,
          flexDirection: 'row',
        }}>
        <Icon name={icon} size={25} color="#000" />
        <View style={{alignItems: 'flex-start', marginLeft: 15}}>
          <CustomText
            styles={{
              fontSize: 14,
              color: '#000',
              textAlign: 'center',
              lineHeight: 20,
            }}>
            {heading}
          </CustomText>
          <CustomText bold styles={{fontSize: 12, color: '#A1A1AA'}}>
            {subHeading}
          </CustomText>
        </View>
      </TouchableOpacity>
      {!last && (
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: '#ededed',
            height: 10,
            width: '100%',
            marginTop: 10,
          }}
        />
      )}
    </View>
  );
};

export default ProfileButton;
