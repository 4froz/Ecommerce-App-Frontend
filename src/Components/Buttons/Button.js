import {TouchableOpacity} from 'react-native';
import React from 'react';

//components
import CustomText from '../CustomText';

const CustomButton = ({onPress, title, style, disabled, textStyle}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        width: '100%',
        padding: 15,
        backgroundColor: disabled ? '#78716C' : '#000',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        flexDirection: 'row',
        marginTop: 30,
        elevation: 10,
        ...style,
      }}>
      <CustomText
        bold
        styles={{
          fontSize: 18,
          color: '#fff',
          textAlign: 'center',
          lineHeight: 20,
          ...textStyle,
        }}>
        {title}
      </CustomText>
      {/* <Icon name='arrow-forward-outline' size={18} color={"#fff"} style={{marginLeft:5}} /> */}
    </TouchableOpacity>
  );
};

export default CustomButton;
