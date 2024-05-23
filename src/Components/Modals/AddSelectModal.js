import {
  View,
  Modal,
  TouchableOpacity,
  Animated,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

//components
import CustomText from '../CustomText';
import AddressCard from '../Cards/AddressCard';
import CustomButton from '../Buttons/Button';

const AddSelectModal = ({setShow, showModal}) => {
  //#region
  const bottomValue = React.useRef(new Animated.Value(300)).current;
  const navigation = useNavigation();
  React.useEffect(() => {
    toggleModal();
  }, [showModal]);
  const toggleModal = () => {
    if (showModal) {
      setShow(true);
      Animated.spring(bottomValue, {
        toValue: 10,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShow(false), 200);
      Animated.timing(bottomValue, {
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
        Animated.timing(bottomValue, {
          toValue: 1000,
          duration: 200,
          useNativeDriver: true,
        }).start();
        setTimeout(() => {
          setShow(false);
        }, 250);
      }}
      animationType="none">
      <View
        style={{
          flex: 1,
          backgroundColor: '#000000AA',
          flexDirection: 'column',
          height: '100%',
        }}>
        <TouchableOpacity
          onPress={() => {
            Animated.timing(bottomValue, {
              toValue: 1000,
              duration: 200,
              useNativeDriver: true,
            }).start();
            setTimeout(() => {
              setShow(false);
            }, 250);
          }}
          activeOpacity={0.7}
          style={{height: '30%'}}></TouchableOpacity>
        <Animated.View
          style={{
            backgroundColor: 'white',
            width: '100%',
            flexDirection: 'column',
            paddingVertical: 20,
            height: '70%',
            transform: [{translateY: bottomValue}],
          }}>
          <ScrollView
            contentContainerStyle={{paddingHorizontal: 20}}
            style={{flex: 1, width: '100%'}}
            showsVerticalScrollIndicator={false}>
            <CustomText bold styles={{fontSize: 18}}>
              Select Delivery Address
            </CustomText>

            <AddressCard />
            <AddressCard />
          </ScrollView>

          <View
            style={{
              position: 'absolute',
              elevation: 20,
              bottom: 7,
              backgroundColor: '#fff',
              paddingHorizontal: 30,
              paddingVertical: 15,
              width: '100%',
            }}>
            <CustomButton
              onPress={() => {
                setShow(false);
                navigation.navigate('Address');
              }}
              style={{elevation: 0, marginTop: 0}}
              title={'Add Address'}
            />
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default AddSelectModal;
