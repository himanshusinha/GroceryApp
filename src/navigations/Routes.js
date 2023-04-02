import React, {useState} from 'react';
import AppNavigation from './AppNavigation';
import Auth from '@react-native-firebase/auth';
import AuthNavigation from './AuthNavigation';
const Routes = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  Auth().onAuthStateChanged(user => {
    if (user !== null) {
      setIsUserLoggedIn(true);
    }
  });
  return <>{!isUserLoggedIn ? <AppNavigation /> : <AuthNavigation />}</>;
};
export default Routes;
