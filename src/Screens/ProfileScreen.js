import {useDispatch, useSelector} from 'react-redux';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

// actions
import {logout} from '../Redux/userSlice';

//components
import CustomText from '../Components/CustomText';
import ProfileButton from '../Components/Buttons/ProfileButton';

const ProfileScreen = ({navigation}) => {
  const user = useSelector(state => state.userInfo);
  const dispatch = useDispatch();
  return (
    <View style={{backgroundColor: '#f6f5fa', flex: 1}}>
      {user.name ? (
        <View>
          <View
            style={{
              width: '100%',
              alignItems: 'flex-start',
              paddingVertical: 10,
              paddingHorizontal: 20,
              backgroundColor: '#fff',
              paddingBottom: 20,
              paddingTop: 40,
            }}>
            <CustomText bold styles={{fontSize: 22}}>
              {user.name}
            </CustomText>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CustomText styles={{fontSize: 12}}>{user.number}</CustomText>
              </View>
              <CustomText bold styles={{fontSize: 14, color: '#000'}}>
                Edit
              </CustomText>
            </View>
          </View>

          <ProfileButton
            first
            icon="bag-handle-outline"
            heading={'Orders'}
            onPress={() => navigation.navigate('Orders')}
            subHeading={'Orders placed: 0'}
          />

          <ProfileButton
            icon="location-outline"
            heading={'Addresses'}
            onPress={() => navigation.navigate('Address')}
            subHeading={'1 saved address'}
          />

          <ProfileButton
            icon="person-circle-outline"
            heading={'Privacy & Policy'}
            onPress={() => navigation.navigate('PP')}
            subHeading={'View our Privacy & Policy'}
          />
          <ProfileButton
            last
            icon="reader-outline"
            heading={'Terms & Condition'}
            onPress={() => navigation.navigate('TC')}
            subHeading={'View our Terms & Condition'}
          />

          <View
            style={{
              padding: 15,
              paddingHorizontal: 25,
              backgroundColor: '#fff',
              marginTop: 40,
            }}>
            <TouchableOpacity
              onPress={() => {
                dispatch(logout());
              }}
              activeOpacity={0.8}
              style={{
                width: '100%',
                alignItems: 'center',
                borderRadius: 10,
                flexDirection: 'row',
              }}>
              <Icon name="log-out-outline" size={25} color="#000" />

              <CustomText
                styles={{
                  fontSize: 14,
                  color: '#000',
                  textAlign: 'center',
                  lineHeight: 20,
                  marginLeft: 15,
                }}>
                Logout
              </CustomText>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View
          style={{
            width: '100%',
            alignItems: 'flex-start',
            paddingVertical: 10,
            paddingHorizontal: 18,
            backgroundColor: '#fff',
            paddingBottom: 20,
            paddingTop: 40,
          }}>
          <CustomText bold styles={{fontSize: 18}}>
            Hey, User
          </CustomText>
          <CustomText styles={{fontSize: 12, color: '#a4a4a4', marginTop: 10}}>
            Welcome to Nike.Please Login in order to Manage your orders & other
            details.
          </CustomText>

          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{
              width: '100%',
              padding: 12,
              backgroundColor: '#000',
              borderRadius: 5,
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <CustomText bold styles={{fontSize: 14, color: '#fff'}}>
              Login / Sign up
            </CustomText>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ProfileScreen;
