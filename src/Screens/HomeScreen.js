import {View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';

// Components
import CustomText from '../Components/CustomText';
import Header from '../Components/Headers/Header';
import CustomButton from '../Components/Buttons/Button';
import TopPicks from '../Sections/Home/TopPicks';
import BestSellers from '../Sections/Home/BestSellers';
import NewProd from '../Sections/Home/NewProd';

const HomeScreen = ({navigation}) => {
  const user = useSelector(state => state.userInfo);

  useEffect(() => {
    if (!user.name) {
      navigation.navigate('Login');
    }
  }, [user]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View style={{paddingHorizontal: 20}}>
          {/* Greeting */}
          <CustomText bold styles={{fontSize: 20, marginTop: 20}}>
            Good Evening, {user.name},
          </CustomText>
          <CustomText
            bold
            styles={{fontSize: 24, color: '#78716C', marginTop: 3}}>
            Here's your daily
          </CustomText>

          {/* Recommended Products */}
          <TopPicks />
        </View>

        {/* New Products */}
        <NewProd />

        <View style={{paddingHorizontal: 20, marginBottom: 100}}>
          <BestSellers />
          <CustomButton
            style={{
              marginTop: 50,
              elevation: 0,
              alignSelf: 'center',
              backgroundColor: '#FFF',
              borderWidth: 1,
              paddingVertical: 12,
              borderColor: '#a4a4a4',
              width: '90%',
            }}
            textStyle={{color: '#000', fontSize: 16}}
            title={'View All'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
