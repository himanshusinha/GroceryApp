import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ROUTES} from '../../../constants';
import colors from '../../../constants/colors';

import Auth from '@react-native-firebase/auth';
import Loader from '../../../components/comman/modal/Loader';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import firestore from '@react-native-firebase/firestore';
const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const signUp = async () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      try {
        if (email.length > 0 && password.length > 0) {
          const isUserLogin = await Auth().createUserWithEmailAndPassword(
            email,
            password,
          );

          firestore()
            .collection('Users')
            .add({
              name: name,
              email: email,
              mobile: mobile,
              password: password,
            })
            .then(() => {
              console.log('User added!');
            });

          Toast.show({
            type: 'success',
            text1: 'User account created  successfully !!!',
          });
          navigation.navigate('Login');
        } else {
          Toast.show({
            type: 'error',
            text1: ' please fill all details!',
          });
        }
      } catch (err) {
        console.log(err);

        Toast.show({
          type: 'error',
          text1: 'no record found',
        });
      }
    }, 2000);
  };
  const checkValidation = () => {
    if (name === '') {
      Toast.show({
        type: 'error',
        text1: 'please enter email',
      });
    } else if (email === '') {
      Toast.show({
        type: 'error',
        text1: 'please enter email',
      });
    } else if (mobile === '') {
      Toast.show({
        type: 'error',
        text1: 'please enter mobile',
      });
    } else if (password === '') {
      Toast.show({
        type: 'error',
        text1: 'please enter mobile',
      });
    } else if (cpassword === '') {
      Toast.show({
        type: 'error',
        text1: 'please enter mobile',
      });
    } else {
      Toast.show({
        type: 'error',
        text1: 'please fill all details',
      });
    }
  };
  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        width: '90%',
        marginHorizontal: 20,
      }}>
      <Loader visible={loading} />

      <View style={{width: '100%', marginHorizontal: 20, paddingVertical: 10}}>
        <View style={{paddingVertical: 10}}>
          <TextInput
            placeholder="Enter your name"
            value={name}
            onChangeText={e => setName(e)}
            style={{
              width: '100%',
              borderWidth: 1,
              borderColor: colors.gradientForm,
              borderRadius: 10,
              paddingStart: 10,
              paddingVertical: 10,
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <TextInput
            placeholder="Enter your email"
            value={email}
            onChangeText={e => setEmail(e)}
            style={{
              width: '100%',
              borderWidth: 1,
              borderColor: colors.gradientForm,
              borderRadius: 10,
              paddingStart: 10,
              paddingVertical: 10,
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <TextInput
            placeholder="Enter your mobile"
            value={mobile}
            onChangeText={e => setMobile(e)}
            style={{
              width: '100%',
              borderWidth: 1,
              borderColor: colors.gradientForm,
              borderRadius: 10,
              paddingStart: 10,
              paddingVertical: 10,
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <TextInput
            placeholder="Enter your password"
            value={password}
            secureTextEntry
            onChangeText={e => setPassword(e)}
            style={{
              width: '100%',
              borderWidth: 1,
              borderColor: colors.gradientForm,
              borderRadius: 10,
              paddingStart: 10,
              paddingVertical: 10,
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <TextInput
            placeholder="Enter your confirm password"
            secureTextEntry
            value={cpassword}
            onChangeText={e => setCPassword(e)}
            style={{
              width: '100%',
              borderWidth: 1,
              borderColor: colors.gradientForm,
              borderRadius: 10,
              paddingStart: 10,
              paddingVertical: 10,
            }}
          />
        </View>
        <View style={{marginTop: 40}}>
          <TouchableOpacity
            onPress={() => {
              signUp();
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
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 40,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              letterSpacing: 0.2,
              fontWeight: 'bold',
              color: colors.black,
            }}>
            Already have an account ?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ROUTES.LOGIN);
            }}
            style={{
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                letterSpacing: 0.2,
                fontWeight: 'bold',
                color: colors.gradientForm,
              }}>
              {' '}
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Toast position="top" bottomOffset={20} />
    </SafeAreaView>
  );
};
export default SignUp;
