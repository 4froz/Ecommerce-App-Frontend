import {View, TextInput} from 'react-native';
import React from 'react';

//components
import CustomText from '../CustomText';

const AddressInput = ({heading, style, value, setValue, type,maxLength}) => {
  return (
    <View style={{width: '90%', ...style}}>
      <CustomText bold>{heading}</CustomText>
      <TextInput
        keyboardType={type}
        value={value}
        onChangeText={text => setValue(text)}
        multiline
        maxLength={maxLength}
        style={{
          width: '100%',
          borderWidth: 1,
          marginTop: 8,
          paddingHorizontal: 15,
          borderRadius: 10,
          borderColor: '#a4a4a4',
          fontFamily: 'HelveticaNowDisplay-Regular',
          fontSize: 16,
          color: '#000',
        }}
      />
    </View>
  );
};

export default AddressInput;
