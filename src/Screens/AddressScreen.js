import {
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';

// Components
import ScreenHeader from '../Components/Headers/ScreenHeader';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/Buttons/Button';
import AddressModal from '../Components/Modals/AddressModal';
import AddCard from '../Components/Cards/AddCard';

const AddressScreen = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const hu = false;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScreenHeader title={'Addresses'} />
      {loading ? (
        <ActivityIndicator size={40} color={'#000'} />
      ) : (
        <>
          {hu ? (
            <View
              style={{
                justifyContent: 'center',
                paddingHorizontal: 20,
                height: '70%',
              }}>
              <CustomText styles={{fontSize: 20}}>No Address Found,</CustomText>
              <CustomText
                styles={{
                  fontSize: 16,
                  color: '#78716C',
                  marginTop: 10,
                  marginLeft: 25,
                }}>
                Create a New Address to start Shopping
              </CustomText>
            </View>
          ) : (
            <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
              <AddCard />
            </ScrollView>
          )}
        </>
      )}
      <View
        style={{
          position: 'absolute',
          elevation: 20,
          bottom: 0,
          backgroundColor: '#fff',
          paddingHorizontal: 30,
          paddingVertical: 15,
          width: '100%',
        }}>
        <CustomButton
          onPress={() => setShow(true)}
          style={{elevation: 0, marginTop: 0}}
          title={'Add Address'}
        />
      </View>
      <AddressModal show={show} setShow={setShow} />
    </View>
  );
};

export default AddressScreen;
