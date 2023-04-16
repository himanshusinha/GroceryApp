import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import Auth from '@react-native-firebase/auth';
import {StackActions, useNavigation} from '@react-navigation/native';
import colors from '../../constants/colors';
import {ROUTES} from '../../constants';
const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      Auth().onAuthStateChanged(user => {
        const routeName = user !== null ? ROUTES.HOME : ROUTES.LOGIN;
        navigation.dispatch(StackActions.replace(routeName));
      });
    }, 3000);
    return () => {};
  }, []);
  return (
    <View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.white,
        }}>
        <Text style={{fontSize: 30, color: colors.gradientForm}}>Splash</Text>
      </View>
    </View>
  );
};
export default Splash;
