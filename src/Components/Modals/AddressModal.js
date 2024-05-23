import {View, Modal, TextInput} from 'react-native';
import React, {useState} from 'react';

// components
import CustomButton from '../Buttons/Button';
import CustomText from '../CustomText';
import AddressInput from '../Inputs/AddressInput';

const AddressModal = ({show, setShow}) => {
  const [address, setaddress] = useState('');
  const [city, setcity] = useState('');
  const [pincode, setpincode] = useState('');
  return (
    <Modal
      transparent
      statusBarTranslucent
      visible={show}
      onRequestClose={() => setShow(false)}
      animationType="fade">
      <View
        style={{
          flex: 1,
          backgroundColor: '#000000AA',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '90%',
            backgroundColor: '#fff',
            padding: 10,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 30,
          }}>
          {/* Address */}
          <AddressInput
            heading={'Street Address'}
            value={address}
            setValue={setaddress}
            maxLength={30}
          />
          {/* Pincode / City */}
          <View
            style={{
              width: '90%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <AddressInput
              style={{marginTop: 10, width: '48%'}}
              heading={'City'}
              maxLength={10}
              value={city}
              setValue={setcity}
            />
            <AddressInput
              maxLength={6}
              type={'numeric'}
              style={{marginTop: 10, width: '48%'}}
              heading={'ZIP / Postalcode'}
              value={pincode}
              setValue={setpincode}
            />
          </View>

          <CustomButton
            disabled={
              address.length < 5 || city.length < 3 || pincode.length < 6
            }
            onPress={() => setShow(false)}
            style={{
              elevation: 0,
              marginTop: 30,
              width: '80%',
              paddingVertical: 15,
            }}
            textStyle={{fontSize: 16}}
            title={'Create'}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AddressModal;
