import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import colors from '../../../constants/colors';
import Auth from '@react-native-firebase/auth';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const forgotPassword = () => {
    if (email.length > 0) {
      Auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          Toast.show({
            type: 'success',
            text1: 'Please check your email .....',
          });
        })
        .catch(error => {
          alert(error);
        });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Please enter correct email .....',
      });
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
      }}>
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
      <View style={{marginTop: 40, width: '100%'}}>
        <TouchableOpacity
          onPress={() => forgotPassword()}
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
            Submit
          </Text>
        </TouchableOpacity>
      </View>
      <Toast position="top" bottomOffset={20} />
    </View>
  );
};
export default ForgotPassword;
