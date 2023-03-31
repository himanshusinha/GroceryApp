import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppNavigation from './AppNavigation';
const Routes = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};
export default Routes;
