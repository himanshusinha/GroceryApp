import React from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
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
      // Toast.show({
      //   type: 'error',
      //   text1: 'Please fill all details .....',
      // });
      Toast.show({
        type: 'success',
        text1: 'Please enter correct email .....',
      });
    }
  };
  return (
    <SafeAreaView>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
    </SafeAreaView>
  );
};
export default ForgotPassword;
