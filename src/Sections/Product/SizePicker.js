import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

// Component
import CustomText from '../../Components/CustomText';

const SizePicker = ({specification, selectedSize,setSize}) => {
  return (
    <View>
      <CustomText bold styles={{fontSize: 20, color: '#000', marginTop: 20}}>
        Size
      </CustomText>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        {specification.sizes.map(size => (
          <TouchableOpacity
            onPress={() => setSize(size)}
            key={size.size}
            style={{
              padding: 8,
              marginRight: 10,
              borderRadius: 10,
              backgroundColor:
                selectedSize.size === size.size ? '#000' : '#ededed',
            }}>
            <CustomText
              styles={{
                color: selectedSize.size === size.size ? '#fff' : '#000',
                fontSize: 18,
              }}>
              {size.size}
            </CustomText>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SizePicker;
