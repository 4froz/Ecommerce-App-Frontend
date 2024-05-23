import {View, TouchableOpacity} from 'react-native';
import React from 'react';

// Components
import CustomText from '../../Components/CustomText';

const ColorPicker = ({specs, specification,setSpecs,setSize}) => {
  return (
    <View>
      <CustomText bold styles={{fontSize: 20, color: '#000', marginTop: 20}}>
        Color
      </CustomText>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        {specs.map(item => (
          <TouchableOpacity
            key={item.color}
            onPress={() => {
              setSpecs(item);
              setSize(item.sizes[0]);
            }}
            style={{
              borderWidth: specification.color === item.color ? 1.5 : 0,
              padding: 2,
              marginRight: 10,
              borderRadius: 50,
              borderColor: '#78716C',
            }}>
            <View
              style={[
                {width: 30, height: 30, borderRadius: 50},
                {backgroundColor: item.color},
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ColorPicker;
