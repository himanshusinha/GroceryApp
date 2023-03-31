import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import ImageLoad from 'react-native-image-placeholder';
import {COLORS} from '../../constants';

import colors from '../../constants/colors';
import styles from './styles';
const ProductDetails = () => {
  const route = useRoute();
  const {data} = route.params;
  console.log('data is', data);
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: 'white', marginHorizontal: 10}}>
      <View
        style={{
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        <View style={{marginTop: 20}}>
          <ImageLoad
            resizeMode={'contain'}
            style={{width: 300, height: 300, alignSelf: 'center'}}
            loadingStyle={{color: COLORS.gradientForm}}
            source={{
              uri: data.image,
            }}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'justify',
              marginTop: 20,
              color: 'black',
            }}>
            {data.title}
          </Text>
          <Text
            style={{
              fontSize: 16,
              letterSpacing: 0.2,
              textAlign: 'justify',
              marginTop: 20,
              color: 'black',
            }}>
            {data.description}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 18,
                letterSpacing: 0.2,
                textAlign: 'justify',
                marginTop: 20,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Price
            </Text>
            <Text
              style={{
                fontSize: 18,
                letterSpacing: 0.2,
                textAlign: 'justify',
                marginTop: 20,
                color: 'black',
                fontWeight: 'bold',
                color: colors.gradientForm,
              }}>
              {''} {''} ${data.price}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          bottom: 10,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.gradientForm,
            height: 50,
            width: '100%',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              letterSpacing: 0.2,
              fontWeight: 'bold',
              color: colors.white,
            }}>
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default ProductDetails;
