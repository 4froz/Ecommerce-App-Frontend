import SmsRetriever from 'react-native-sms-retriever';
import Icon from 'react-native-vector-icons/Ionicons';
import {OtpInput} from 'react-native-otp-entry';
import {useDispatch} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';

// actions
import {login} from '../Redux/userSlice';

//components
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/Buttons/Button';

const OtpScreen = ({navigation, route}) => {
  const [loading, setLoading] = useState(false);
  const {obj, name, number} = route.params;

  const dispatch = useDispatch();

  const [otp, setotp] = useState('');

  // Auto Detect Otp
  useEffect(() => {
    // Start the SMS Retriever API
    const startSmsRetriever = async () => {
      try {
        const registered = await SmsRetriever.startSmsRetriever();
        if (registered) {
          SmsRetriever.addSmsListener(event => {
            const message = event.message;
            const otpCode = extractOtpFromMessage(message); // Extract OTP from the message
            setotp(otpCode);
            SmsRetriever.removeSmsListener();
          });
        }
      } catch (error) {
        console.error('Error starting SMS retriever', error);
      }
    };

    startSmsRetriever();

    // Cleanup listener on component unmount
    return () => {
      SmsRetriever.removeSmsListener();
    };
  }, []);

  const extractOtpFromMessage = message => {
    // Adjust this regex to match your OTP message format
    const otpRegex = /\b\d{6}\b/;
    const match = message.match(otpRegex);
    return match ? match[0] : '';
  };

  // Verify
  const veriftOtp = async () => {
    setLoading(true);
    try {
      const result = await obj.confirm(otp);
      setLoading(false);
      dispatch(login({name: name, number: number}));
      navigation.replace('Home');
      navigation.reset({
        index: 0,
        routes: [{name: 'BottomNav'}],
      });
      ToastAndroid.show('Login Success', 1000);
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30,
        paddingHorizontal: 16,
      }}>
      {loading ? (
        <ActivityIndicator size={40} color={'#000'} />
      ) : (
        <>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{marginRight: 15, marginTop: 20}}>
            <Icon name="arrow-back" color="#000" size={25} />
          </TouchableOpacity>
          <CustomText
            styles={{fontSize: 22, alignSelf: 'center', marginTop: 30}}
            bold>
            Enter Verification Code
          </CustomText>
          <CustomText
            styles={{
              fontSize: 14,
              color: '#a5a5a5',
              textAlign: 'center',
              marginTop: 5,
            }}>
            We have sent a otp to your mobile number
          </CustomText>

          <OtpInput
            theme={{
              containerStyle: {
                marginTop: 30,
                width: '90%',
                alignSelf: 'center',
              },
              focusStickStyle: {height: 20},
              pinCodeTextStyle: {
                color: '#000',
                fontFamily: 'GothamMedium',
                fontSize: 22,
              },
              pinCodeContainerStyle: {
                height: 45,
                width: 45,
                borderColor: '#a4a4a4',
                borderWidth: 0,
                borderRadius: 0,
                borderBottomWidth: 2,
              },
              focusedPinCodeContainerStyle: {borderColor: '#a4a4a4'},
            }}
            numberOfDigits={6}
            onTextChange={text => setotp(text)}
          />
          <View
            style={{
              width: '90%',
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'space-between',
            }}>
            <CustomText
              styles={{
                fontSize: 14,
                color: '#a5a5a5',
                textAlign: 'center',
                marginTop: 20,
              }}>
              Didn't recieve the otp ?
            </CustomText>
            <CustomText
              bold
              styles={{
                fontSize: 14,
                color: '#000',
                textAlign: 'center',
                marginTop: 20,
              }}>
              Resend Otp
            </CustomText>
          </View>

          <View
            style={{
              position: 'absolute',
              bottom: 30,
              alignSelf: 'center',
              width: '100%',
            }}>
            <CustomButton
              title={'Verify'}
              disabled={otp.length < 6}
              onPress={() => {
                veriftOtp();
              }}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default OtpScreen;
