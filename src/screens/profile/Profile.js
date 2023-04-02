import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Auth from '@react-native-firebase/auth';
import colors from '../../constants/colors';

const Profile = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: colors.white,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            width: '90%',
            height: 45,
            backgroundColor: colors.gradientForm,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: colors.white}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Profile;
