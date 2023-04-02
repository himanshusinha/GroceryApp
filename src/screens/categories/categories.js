import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import colors from '../../constants/colors';
import {
  fetchProducts,
  GetProductByCategory,
} from '../../redux/asyncThunk/product.asyncThunk';
const Categories = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const categories = [
    "men's clothing",
    'jewelery',
    'electronics',
    "women's clothing",
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
      .unwrap()
      .then(res => {
        console.log('ress category', res);
      })
      .catch(err => {
        console.log('err', err);
      });
  }, []);
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 10, marginHorizontal: 10}}>
        <View style={{flexDirection: 'row'}}>
          {categories.map((item, index) => {
            return (
              <TouchableOpacity
                style={{
                  width: 140,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: 10,
                  backgroundColor:
                    selectedIndex === index
                      ? colors.gradientForm
                      : colors.white,
                  borderColor:
                    selectedIndex === index
                      ? colors.gradientForm
                      : colors.primary,
                  borderWidth: 1,
                }}
                onPress={() => setSelectedIndex(index)}>
                <View>
                  <Text
                    style={{
                      color:
                        selectedIndex === index ? colors.white : colors.black,
                      padding: 5,
                    }}>
                    {item}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
export default Categories;
