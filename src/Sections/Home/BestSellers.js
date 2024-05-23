import {View, Dimensions, FlatList} from 'react-native';
import React from 'react';
import CustomText from '../../Components/CustomText';
import {products} from '../../Cat';
import SmallProductCard from '../../Components/Cards/SmallProductCard';
const WIDTH = Dimensions.get('window').width;

const BestSellers = () => {
  return (
    <View>
      <CustomText styles={{fontSize: 20, marginTop: 50}}>
        Our Bestsellers
      </CustomText>

      <FlatList
        columnWrapperStyle={{gap: 10}}
        contentContainerStyle={{gap: 10, paddingBottom: 12}}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        data={products}
        style={{marginTop: 30}}
        renderItem={({item}) => <SmallProductCard small={true} item={item} />}
      />
    </View>
  );
};

export default BestSellers;
