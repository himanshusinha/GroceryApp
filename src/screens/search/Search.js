import React, {useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {COLORS, IMAGES, ROUTES} from '../../constants';
import styles from '../home/styles';
import ImageLoad from 'react-native-image-placeholder';
import {useNavigation} from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  // const [oldData, setOldData] = useState(data);
  const [searchList, setSearchedList] = useState([]);
  // const filterData = txt => {
  //   let newData = oldData.filter(item => {
  //     return item.title.toLowerCase().match(txt.toLowerCase());
  //   });
  //   setSearchedList(newData);
  // };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '95%',
            borderWidth: 1,
            borderColor: 'black',
            height: 40,
            alignItems: 'center',
            borderRadius: 20,
            marginHorizontal: 10,
          }}>
          <Image
            style={{width: 20, height: 20, marginStart: 10}}
            source={IMAGES.search}
          />
          <TextInput
            value={search}
            autoCapitalize={'none'}
            onChangeText={txt => {
              setSearch(txt);
              filterData(txt);
            }}
            style={{
              width: '80%',
              height: 40,
              marginStart: 10,
              paddingStart: 10,
            }}
          />
          {search !== '' && (
            <TouchableOpacity>
              <Image
                style={{width: 15, height: 15, alignSelf: 'center'}}
                source={IMAGES.close}
              />
            </TouchableOpacity>
          )}
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={searchList}
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
    </SafeAreaView>
  );
};
export default Search;
