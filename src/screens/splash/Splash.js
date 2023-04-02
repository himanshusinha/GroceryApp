import {View, Text, StyleSheet, ImageBackground, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import Auth from '@react-native-firebase/auth';
import {StackActions, useNavigation} from '@react-navigation/native';
import colors from '../../constants/colors';
import {scale} from 'react-native-size-matters';
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
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <StatusBar
          translucent={true}
          backgroundColor={'transparent'}
          barStyle="light-content"
        />
        <View style={styles.view}>
          <Text
            style={{
              fontSize: scale(16),
              color: colors.gradientForm,
            }}>
            RNSocialApp23
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: scale(12),
    color: 'white',
  },
});
export default Splash;
