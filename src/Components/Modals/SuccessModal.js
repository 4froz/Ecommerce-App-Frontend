import {View, Modal, Animated, Dimensions, Image} from 'react-native';
import React, {useEffect, useRef} from 'react';

//components
import CustomText from '../CustomText';
import CustomButton from '../Buttons/Button';

const SuccessModal = ({navigation, showModal}) => {
  //#region
  const rightValue = useRef(new Animated.Value(-1)).current;

  useEffect(() => {
    toggleModal();
  }, [showModal]);
  const toggleModal = () => {
    if (showModal) {
      Animated.spring(rightValue, {
        toValue: -1,
        duration: 0,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => navigation.setParams({success: false}), 200);
      Animated.timing(rightValue, {
        toValue: 300,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };
  //#endregion

  return (
    <Modal
      transparent
      statusBarTranslucent
      visible={showModal}
      onRequestClose={() => {
        Animated.timing(rightValue, {
          toValue: 1000,
          duration: 200,
          useNativeDriver: true,
        }).start();
        setTimeout(() => {
          navigation.setParams({success: false});
        }, 250);
      }}
      animationType="none">
      <View
        style={{
          flex: 1,
          backgroundColor: '#000000AA',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.View
          style={{
            backgroundColor: 'white',
            width: Dimensions.get('window').width + 10,
            flexDirection: 'column',
            paddingVertical: 20,
            height: '100%',
            transform: [{translateX: rightValue}],
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: Dimensions.get('window').width * 0.1,
          }}>
          <Image
            source={require('../../Assets/Images/tick.png')}
            style={{width: 160, height: 200}}
          />
          <CustomText
            bold
            styles={{
              fontSize: 25,
              marginTop: 30,
              width: '100%',
              textAlign: 'center',
            }}>
            Your Order has been placed!
          </CustomText>

          <CustomText
            styles={{
              fontSize: 16,
              color: '#78716C',
              marginTop: 10,
              width: '100%',
              textAlign: 'center',
            }}>
            Your Order is placed successfully, please to to order page to manage
            your order
          </CustomText>

          <View
            style={{
              position: 'absolute',
              elevation: 20,
              bottom: 0,
              backgroundColor: '#fff',
              paddingHorizontal: Dimensions.get('window').width * 0.1,
              paddingVertical: 15,
              width: Dimensions.get('window').width + 10,
            }}>
            <CustomButton
              onPress={() => {
                navigation.navigate('Order');
                navigation.setParams({success: false});
              }}
              style={{elevation: 0, marginTop: 10}}
              title={'Manage Order'}
            />
            <CustomButton
              style={{
                marginTop: 15,
                backgroundColor: '#fff',
                paddingVertical: 10,
                elevation: 0,
              }}
              textStyle={{color: '#000', fontSize: 16}}
              onPress={() => {
                Animated.timing(rightValue, {
                  toValue: 1000,
                  duration: 200,
                  useNativeDriver: true,
                }).start();
                setTimeout(() => {
                  navigation.setParams({success: false});
                }, 250);
              }}
              title={'Go back to Home'}
            />
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default SuccessModal;
