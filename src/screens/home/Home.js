import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, Pressable, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {fetchProducts} from '../../redux/asyncThunk/product.asyncThunk';
import colors from '../../constants/colors';
import ImageLoad from 'react-native-image-placeholder';
import styles from './styles';
import {COLORS, ROUTES} from '../../constants';
import {useNavigation} from '@react-navigation/native';
const Home = props => {
  const itemId = props.route.params;
  console.log('....itemID', itemId);
  console.log(itemId);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  if (loading) {
    setLoading(false);
  }

  useEffect(() => {
    dispatch(fetchProducts())
      .unwrap()
      .then(res => {
        console.log('ress', res);
      })
      .catch(err => {
        console.log('err', err);
      });
  }, []);
  const {data} = useSelector(state => state.product);

  return (
    <View style={{backgroundColor: colors.white}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => {
          return (
            <Pressable
              onPress={() => {
                navigation.navigate('ProductDetails', {
                  data: item,
                });
              }}>
              <View style={styles.productContainer}>
                <ImageLoad
                  resizeMode={'contain'}
                  style={styles.productImage}
                  loadingStyle={{color: COLORS.gradientForm}}
                  source={{
                    uri: item.image,
                  }}
                />
                <View style={{marginHorizontal: 10, marginTop: 10}}>
                  <Text style={styles.productTitle}>
                    {item.title.substring(0, 20) + '....'}
                  </Text>
                  <Text style={styles.productPrice}>$ {item.price}</Text>
                </View>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default Home;