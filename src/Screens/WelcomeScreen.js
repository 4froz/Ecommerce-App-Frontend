import FastImage from 'react-native-fast-image';
import {View} from 'react-native';
import React from 'react';

// Components
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/Buttons/Button';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <FastImage
        style={{width: '100%', height: '69%'}}
        source={{
          uri: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          priority: FastImage.priority.low,
        }}
      />

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '35%',
          backgroundColor: '#fff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          elevation: 10,
          padding: 20,
          paddingTop: 30,
          alignItems: 'center',
        }}>
        {/* Heading */}
        <CustomText styles={{fontSize: 30}} bold>
          Start your journey
        </CustomText>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CustomText styles={{fontSize: 30, marginTop: 0}} bold>
            with
          </CustomText>
          <CustomText styles={{fontSize: 30, marginLeft: 10}} extra>
            NIKE
          </CustomText>
          <CustomText styles={{fontSize: 30}} bold>
            .
          </CustomText>
        </View>
        {/* Sub Heading */}
        <CustomText
          styles={{
            fontSize: 14,
            color: '#a5a5a5',
            marginTop: 25,
            textAlign: 'center',
            lineHeight: 15,
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </CustomText>

        {/* Button */}
        <CustomButton
          title={'Shop Now'}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;
