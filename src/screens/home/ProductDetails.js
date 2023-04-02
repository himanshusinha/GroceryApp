import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageLoad from 'react-native-image-placeholder';
import {useDispatch} from 'react-redux';
import {COLORS, IMAGES, ROUTES} from '../../constants';
import colors from '../../constants/colors';
import {addToCart} from '../../redux/slice/cart.slice';
import ModalComp from '../../components/comman/modal/ModalComp';

const ProductDetails = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const {data} = route.params;
  const [qty, setQty] = useState(1);
  const checkStaus = async () => {
    let isUserLoggedIn = false;
    const status = await AsyncStorage.getItem('IS_USER_LOGGED_IN');
    if (status == null) {
      isUserLoggedIn = false;
    } else {
      isUserLoggedIn = true;
    }
    return isUserLoggedIn;
  };

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: 'white', marginHorizontal: 10}}>
      <View
        style={{
          justifyContent: 'center',
          backgroundColor: 'white',
          marginHorizontal: 10,
        }}>
        <View style={{marginTop: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ImageLoad
              resizeMode={'contain'}
              style={{width: 300, height: 300, alignSelf: 'center'}}
              loadingStyle={{color: COLORS.gradientForm}}
              source={{
                uri: data.image,
              }}
            />
            <TouchableOpacity
              onPress={() => {
                if (checkStaus() === true) {
                  dispatch(addToCart(data));
                } else {
                  setModalVisible(true);
                }
              }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#F0EAD6',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 20, height: 20, alignSelf: 'center'}}
                source={IMAGES.heart}
              />
            </TouchableOpacity>
          </View>
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
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                flex: 1,
              }}>
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
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => {
                    if (qty > 1) {
                      setQty(qty - 1);
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
                  <Text style={{fontSize: 18}}>{qty}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => setQty(qty + 1)}
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
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          bottom: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            if (checkStaus() === true) {
              dispatch(
                addToCart({
                  id: data.id,
                  title: data.title,
                  price: data.price,
                  description: data.description,
                  qty: qty,
                  image: data.image,
                  rating: data.rating,
                }),
              );
            } else {
              setModalVisible(true);
            }
          }}
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
      <ModalComp
        modalVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onLogin={() => {
          setModalVisible(false);
          navigation.navigate(ROUTES.LOGIN);
        }}
        onSignUp={() => {
          setModalVisible(false);
          navigation.navigate(ROUTES.SIGN_UP);
        }}
      />
    </SafeAreaView>
  );
};
export default ProductDetails;
