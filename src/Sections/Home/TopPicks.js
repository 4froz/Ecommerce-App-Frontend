import {View, Dimensions, FlatList} from 'react-native';
import React from 'react';
import CustomText from '../../Components/CustomText';
import { products } from '../../Cat';
import SmallProductCard from '../../Components/Cards/SmallProductCard';
const WIDTH = Dimensions.get('window').width;


const _renderItem = item => {
    return <SmallProductCard key={item.id} item={item} />;
  };
const TopPicks = () => {
  return (
    <View>
      <CustomText styles={{fontSize: 20, marginTop: 50}}>
        Top Picks for You
      </CustomText>
      <CustomText styles={{fontSize: 20, color: '#78716C', marginTop: 3}}>
        Recommended Products
      </CustomText>

      <View style={{width: WIDTH, alignItems: 'center', marginTop: 30}}>
        <FlatList
          snapToAlignment="start"
          horizontal
          ItemSeparatorComponent={() => <View style={{width: 10}} />}
          renderItem={({item}) => _renderItem(item)}
          style={{width: '100%'}}
          data={products}
          keyExtractor={(item, index) => item._id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default TopPicks;
