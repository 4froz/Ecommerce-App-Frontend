import React, {memo, useEffect, useState} from 'react';
import FastImage from 'react-native-fast-image';
import {
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

// Components
import ScreenHeader from '../Components/Headers/ScreenHeader';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/Buttons/Button';
import ProductImage from '../Sections/Product/ProductImage';
import ColorPicker from '../Sections/Product/ColorPicker';
import SizePicker from '../Sections/Product/SizePicker';

const specs = [
  {
    color: '#1B5350',
    uri: 'https://static.nike.com/a/images/t_default/60727439-460b-4814-9ed8-77b8ad3e66a8/dunk-low-shoes-wbxcmN.png',
    available: false,
    sizes: [
      {size: 38, available: false},
      {size: 39, available: true},
      {size: 42, available: true},
      {size: 48, available: true},
      {size: 52, available: true},
    ],
  },
  {
    color: '#C82A39',
    available: false,
    uri: 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bcc75d29-e70d-4beb-9615-dd7761e18b90/jordan-max-aura-5-shoes-ZBZ4Pz.png',
    sizes: [
      {size: 38, available: false},
      {size: 39, available: true},
      {size: 42, available: true},
      {size: 48, available: true},
      {size: 52, available: true},
    ],
  },
  {
    color: '#A2B3CB',
    uri: 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/93a5b911-d056-47f8-9d05-c8da78b15c6a/backpack-JlJBNw.png',
    available: true,
    sizes: [
      {size: 38, available: true},
      {size: 39, available: true},
      {size: 42, available: true},
      {size: 48, available: true},
      {size: 52, available: true},
    ],
  },
  {
    color: '#E0AAAC',
    available: true,
    uri: 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/24e6bbc2-64af-4449-ace6-09d154a69484/dunk-low-older-shoes-mxH1lh.png',
    sizes: [
      {size: 38, available: false},
      {size: 39, available: true},
      {size: 42, available: true},
      {size: 48, available: true},
    ],
  },
];

const ProductScreen = () => {
  // logic
  const [specification, setSpecs] = useState(specs[0]);
  const [selectedSize, setSize] = useState(specs[0].sizes[0]);
  const [loading, setLoading] = useState(true);

  // loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {loading ? (
        <ActivityIndicator size={40} color={'#000'} />
      ) : (
        <>
          <ScreenHeader />
          <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            <ProductImage
              selectedSize={selectedSize}
              specification={specification}
            />
            <View style={{paddingHorizontal: 25, marginTop: 30}}>
              {/* Product Name */}
              <CustomText bold styles={{fontSize: 24, color: '#000'}}>
                Nike Pegasus 41
              </CustomText>

              {/* Product Desc */}
              <CustomText
                numberOfLines={3}
                styles={{
                  fontSize: 14,
                  color: '#78716C',
                  marginTop: 15,
                  lineHeight: 15,
                }}>
                Created for the hardwood but taken to the streets, the '80s
                b-ball icon returns with a crisp upper and refreshing colour
                combos. Channelling vintage style back onto the streets, its
                padded, low-cut collar lets you take your game anywhere—in
                comfort.
              </CustomText>

              <ColorPicker
                setSpecs={setSpecs}
                setSize={setSize}
                specs={specs}
                specification={specification}
              />

              <SizePicker
                setSize={setSize}
                specification={specification}
                selectedSize={selectedSize}
              />

              {specification.available && selectedSize.available ? (
                <CustomButton
                  textStyle={{fontSize: 18}}
                  title="Add to bag"
                  style={{
                    marginBottom: 40,
                    borderRadius: 10,
                    elevation: 0,
                    backgroundColor: '#000',
                  }}
                />
              ) : (
                <></>
              )}
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default memo(ProductScreen);
