import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Auth from '@react-native-firebase/auth';
import colors from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/slice/auth.slice';

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
    Auth().signOut();
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: colors.white,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}>
        <TouchableOpacity
          onPress={handleLogOut}
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
    </View>
  );
};
export default Profile;
