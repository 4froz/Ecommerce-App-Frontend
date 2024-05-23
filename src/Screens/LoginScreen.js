import React, {memo, useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {TextInput} from 'react-native-paper';
import {ActivityIndicator, Alert, ToastAndroid, View} from 'react-native';

//components
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/Buttons/Button';

const LoginScreen = ({navigation}) => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  const [confirm, setConfirm] = useState(null);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const user = useSelector(state => state.userInfo);

  useEffect(() => {
    if (user.name) {
      navigation.navigate('BottomNav');
    }
  }, [user, navigation]);

  // Send Otp
  const signInWithPhoneNumber = useCallback(async () => {
    try {
      setLoading(true);
      const confirmation = await auth().signInWithPhoneNumber(`+91${number}`);
      setConfirm(confirmation);
      ToastAndroid.show('Otp sent', ToastAndroid.SHORT);
    } catch (error) {
      Alert.alert('Error', error.message);
      setLoading(false);
    }
  }, [number]);

  useEffect(() => {
    if (confirm) {
      navigation.navigate('Otp', {obj: confirm, name, number});
      setLoading(false);
    }
  }, [confirm, name, navigation, number]);

  // Loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30,
        paddingHorizontal: 40,
        justifyContent: loading ? 'center' : 'flex-start',
      }}>
      {loading ? (
        <ActivityIndicator size={40} color={'#000'} />
      ) : (
        <>
          {/* Text */}
          <CustomText
            styles={{fontSize: 30, alignSelf: 'flex-start', marginTop: 30}}>
            Now let's make you a Nike member
          </CustomText>
          <CustomText
            styles={{
              fontSize: 20,
              alignSelf: 'flex-start',
              marginTop: 15,
              color: '#78716C',
            }}>
            We will send you a confirmation code on your mobile number
          </CustomText>

          <TextInput
            theme={{roundness: 10}}
            keyboardType="numeric"
            mode="outlined"
            selectionColor="#000"
            outlineColor="#78716C"
            style={{
              backgroundColor: '#fff',
              paddingHorizontal: 0,
              paddingVertical: 0,
              marginTop: 30,
            }}
            label="Number *"
            color="#000"
            textColor="#000"
            activeOutlineColor="#000"
            value={number}
            onChangeText={text => setNumber(text)}
          />

          <TextInput
            theme={{roundness: 10, fonts: 'Lato-Medium'}}
            mode="outlined"
            selectionColor="#000"
            outlineColor="#78716C"
            style={{
              backgroundColor: '#fff',
              paddingHorizontal: 0,
              paddingVertical: 0,
              marginTop: 20,
            }}
            label="Name *"
            activeOutlineColor="#000"
            value={name}
            textColor="#000"
            onChangeText={text => setName(text)}
          />

          <View
            style={{
              position: 'absolute',
              bottom: 30,
              alignSelf: 'center',
              width: '100%',
            }}>
            <CustomButton
              disabled={name.length < 3 && number.length < 10}
              title={'Continue'}
              onPress={() => signInWithPhoneNumber()}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default memo(LoginScreen);
