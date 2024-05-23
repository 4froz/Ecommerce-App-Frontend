import FastImage from 'react-native-fast-image';
import {View} from 'react-native';
import React from 'react';

// Components
import NewProductCard from '../../Components/Cards/NewProductCard';
import CustomText from '../../Components/CustomText';

const NewProd = () => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
      }}>
      <View style={{paddingHorizontal: 20, marginBottom: 15}}>
        <CustomText styles={{fontSize: 20, marginTop: 50}}>
          New Products
        </CustomText>
      </View>

      <NewProductCard
        title={'Explore'}
        subHeading={'COUNTDOWN BEGINS'}
        heading={' Nike Pegasus 41'}
        uri={
          'https://i.pinimg.com/736x/fd/4e/c3/fd4ec31b44893dec8a3320b28e7b123f.jpg'
        }
      />

      <NewProductCard
        heading={"Jordan Men's"}
        subHeading={`MEN'S     SPORTS`}
        title={'Explore'}
        uri={
          'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      />
    </View>
  );
};

export default NewProd;
