import React, {useEffect, useState} from 'react';
import AppNavigation from './AppNavigation';
import auth from '@react-native-firebase/auth';
import AuthNavigation from './AuthNavigation';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout} from '../redux/slice/auth.slice';
const Routes = () => {
  const {user} = useSelector(state => state?.authSlice);
  const dispatch = useDispatch();
  console.log('......user', user);
  useEffect(() => {
    auth().onAuthStateChanged(userAuth => {
      if (userAuth) {
        login({
          email: userAuth.email,
        });
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return <>{!user ? <AuthNavigation /> : <AppNavigation />}</>;
};
export default Routes;
