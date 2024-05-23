import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomText from '../Components/CustomText';
import SmallProductCard from '../Components/Cards/SmallProductCard';
import {products} from '../Cat';

const SearchScreen = () => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingBottom: 65,
          paddingTop: 35,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            backgroundColor: '#F7F5F7',
            paddingHorizontal: 15,
            borderRadius: 10,
            justifyContent: 'space-between',
          }}>
          <Icon name="search-outline" size={20} color="#78716C" />
          <TextInput
            placeholder="Search Products"
            placeholderTextColor={'#a4a4a4'}
            style={{
              width: '92%',
              fontFamily: 'HelveticaNowDisplay-Regular',
              color: '#000',
            }}
          />
        </View>
        <FlatList
          columnWrapperStyle={{gap: 20}}
          contentContainerStyle={{gap: 10}}
          keyExtractor={index => index.toString()}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={{height: 20}} />}
          data={products}
          style={{marginTop: 20, marginBottom: 100}}
          renderItem={({item}) => (
            <SmallProductCard medium={true} item={item} />
          )}
        />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
