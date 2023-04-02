import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS, IMAGES} from '../../constants';
import styles from '../home/styles';
import ImageLoad from 'react-native-image-placeholder';
import {removeFromWishList} from '../../redux/slice/wishlist.slice';
const WishList = () => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart);
  const [wishList, setWishList] = useState([]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        {wishList ? (
          <View>
            <View
              style={{
                height: Dimensions.get('window').height,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{bottom: 70}}>
                There are no orders in your cart !!!
              </Text>
            </View>
          </View>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={items}
            renderItem={({item, index}) => {
              return (
                <View>
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
                      <Text style={styles.productTitle}>{item.title}</Text>
                      <Text style={styles.productPrice}>$ {item.price}</Text>
                      <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                          onPress={() => {
                            if (qty > 1) {
                              dispatch(removeFromWishList(item));
                            } else {
                              dispatch(removeFromWishList(index));
                            }
                          }}
                          style={{
                            borderColor: 'black',
                            borderWidth: 1,
                            width: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 5,
                            top: 5,
                          }}>
                          <Text style={{fontSize: 20}}>-</Text>
                        </TouchableOpacity>
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            top: 5,
                            marginHorizontal: 10,
                          }}>
                          <Text style={{fontSize: 18}}>{item.qty}</Text>
                        </View>
                        <TouchableOpacity
                          onPress={() => dispatch(removeFromWishList(item))}
                          style={{
                            borderColor: 'black',
                            borderWidth: 1,
                            width: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 5,
                            top: 5,
                            height: 30,
                          }}>
                          <Text style={{fontSize: 20}}>+</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
export default WishList;
