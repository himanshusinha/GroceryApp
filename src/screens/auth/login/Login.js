import {StackActions, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, ROUTES} from '../../../constants';
import colors from '../../../constants/colors';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import Auth from '@react-native-firebase/auth';
import styles from './styles';
import {BallIndicator} from 'react-native-indicators';
import {login} from '../../../redux/slice/auth.slice';
import {useDispatch} from 'react-redux';
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accessToken, setAccessToken] = useState(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const checkValidation = () => {
    if (email === '') {
      Toast.show({
        type: 'error',
        text1: 'email is required',
      });
    } else if (password === '') {
      Toast.show({
        type: 'error',
        text1: 'password is required',
      });
    } else {
      loginWithEmail();
    }
  };

  const loginWithEmail = async () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      try {
        if (email.length > 0 && password.length > 0) {
          firestore()
            .collection('Users')
            .where('email', '==', email)
            .get()

            .then(querySnapShot => {
              console.log(querySnapShot.docs);

              if (querySnapShot.docs.length > 0) {
                if (
                  querySnapShot.docs[0]._data.email === email &&
                  querySnapShot.docs[0]._data.password === password
                ) {
                  Toast.show({
                    type: 'success',
                    text1: 'User logged in successfully',
                  });

                  navigation.dispatch(StackActions.replace(ROUTES.HOME));
                } else {
                  Toast.show({
                    type: 'error',
                    text1: 'email id or password is wrong',
                  });
                }
                console.log(
                  querySnapShot.docs[0]._data.email +
                    ' ' +
                    querySnapShot.docs[0]._data.password,
                );
              } else {
                Toast.show({
                  type: 'error',
                  text1: 'account not found',
                });
                setLoading(false);
              }
            });
        } else {
          Toast.show({
            type: 'error',
            text1: 'account not found',
          });
        }
        await Auth()
          .signInWithEmailAndPassword(email, password)
          // returns  an auth object after a successful authentication
          // userAuth.user contains all our user details
          .then(userAuth => {
            // store the user's information in the redux state
            dispatch(
              login({
                email: userAuth.user.email,
                password: userAuth.user.password,
              }),
            );
          });
      } catch (err) {
        console.log(err);

        Toast.show({
          type: 'error',
          text1: 'no record found',
        });
      }
    }, 2000);
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
      {loading ? (
        <View style={styles.indicatorStyle}>
          <BallIndicator color={COLORS.gradientForm} />
        </View>
      ) : (
        <>
          <View
            style={{width: '100%', marginHorizontal: 20, paddingVertical: 10}}>
            <View style={{paddingVertical: 10}}>
              <TextInput
                placeholder="Enter your email"
                value={email}
                autoCapitalize={'none'}
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
                placeholder="Enter your password"
                secureTextEntry
                value={password}
                autoCapitalize={'none'}
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
            <View style={{color: colors.gradientForm}}>
              <TouchableOpacity
                style={{justifyContent: 'center', alignItems: 'flex-end'}}
                onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD)}>
                <Text style={{color: colors.gradientForm}}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 40}}>
              <TouchableOpacity
                onPress={checkValidation}
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
                  Login
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
                Don't have an account ?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(ROUTES.SIGN_UP);
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
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Toast position="top" bottomOffset={20} />
        </>
      )}
    </SafeAreaView>
  );
};
export default Login;
