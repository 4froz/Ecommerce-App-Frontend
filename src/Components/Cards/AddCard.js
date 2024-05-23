import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

// Components
import CustomText from '../CustomText';

const AddCard = () => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: '100%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <CustomText
          bold
          styles={{
            fontSize: 14,
            color: '#78716C',
            marginTop: 3,
            width: '80%',
          }}>
          Flat No. 503, B-Wing, Sai Residency Apartments, Mumbai, Maharashtra,
          400028
        </CustomText>

        <TouchableOpacity
          onPress={() => {}}
          style={{position: 'relative', alignSelf: 'center'}}>
          <Icon name="close-circle-outline" size={25} color={'black'} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderBottomWidth: 1.3,
          borderColor: '#ededed',
          height: 5,
          width: '100%',
          marginTop: 10,
        }}
      />
    </View>
  );
};

export default AddCard;
