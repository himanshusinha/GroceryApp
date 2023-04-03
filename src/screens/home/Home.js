import React, {useEffect, useState} from 'react';
import ImageLoad from 'react-native-image-placeholder';
import {
  FlatList,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {View} from 'react-native';
import colors from '../../constants/colors';
import styles from './styles';
import {COLORS} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import Loader from '../../components/comman/modal/Loader';
const Home = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isPressed, setIsPressed] = useState(false);
  const [filter, setFilter] = useState(data);
  if (loading) {
    setLoading(false);
  }

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      const result = await response.json();
      setFilter(result);
      setData(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const filterProduct = cat => {
    const updatedList = data.filter(x => x.category === cat);
    setFilter(updatedList);
  };
  return (
    <View style={{backgroundColor: colors.white}}>
      <Loader visible={loading} />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          marginTop: 10,
          marginHorizontal: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              width: 140,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10,
              backgroundColor: colors.white,
              borderColor: colors.gradientForm,
              borderWidth: 1,
            }}
            onPress={() => {
              setFilter(data);
            }}>
            <View>
              <Text
                style={{
                  color: colors.black,
                  padding: 5,
                }}>
                {'All'}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 140,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10,
              backgroundColor: colors.white,
              borderColor: colors.gradientForm,
              borderWidth: 1,
            }}
            onPress={() => {
              filterProduct("men's clothing");
            }}>
            <View>
              <Text
                style={{
                  color: colors.black,
                  padding: 5,
                }}>
                {"Men's Clothing"}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 140,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10,
              backgroundColor: colors.white,
              borderColor: colors.gradientForm,
              borderWidth: 1,
            }}
            onPress={() => {
              filterProduct("women's clothing");
            }}>
            <View>
              <Text
                style={{
                  color: colors.black,
                  padding: 5,
                }}>
                {"Women's Clothing"}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 140,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10,
              backgroundColor: colors.white,
              borderColor: colors.gradientForm,
              borderWidth: 1,
            }}
            onPress={() => {
              filterProduct('jewelery');
            }}>
            <View>
              <Text
                style={{
                  color: colors.black,
                  padding: 5,
                }}>
                {'Jewelery'}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 140,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10,
              backgroundColor: colors.white,
              borderColor: colors.gradientForm,
              borderWidth: 1,
            }}
            onPress={() => {
              filterProduct('electronics');
            }}>
            <View>
              <Text
                style={{
                  color: colors.black,
                  padding: 5,
                }}>
                {"Electronic's"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginTop: 10, marginHorizontal: 10}}>
        <View
          style={{marginBottom: 100, flex: 1, backgroundColor: colors.white}}>
          {filter.map((item, index) => {
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
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
