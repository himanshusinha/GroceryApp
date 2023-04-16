import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../constants';
import Login from '../screens/auth/login/Login';
import SignUp from '../screens/auth/signup/SignUp';
import ForgotPassword from '../screens/auth/forgotPassword/ForgotPassword';
import Splash from '../screens/splash/Splash';
import Notifications from '../screens/notifications/Notifications';
import Profile from '../screens/profile/Profile';
import Search from '../screens/search/Search';
import WishList from '../screens/wishlist/WishList';
import DrawerNavigation from './DrawerNavigation';
import ProductDetails from '../screens/home/ProductDetails';
import Cart from '../screens/cart/Cart';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.SPLASH} component={Splash} />
        <Stack.Screen name={ROUTES.LOGIN} component={Login} />
        <Stack.Screen name={ROUTES.SIGN_UP} component={SignUp} />
        <Stack.Screen
          name={ROUTES.FORGOT_PASSWORD}
          component={ForgotPassword}
        />
        <Stack.Screen name={ROUTES.HOME} component={DrawerNavigation} />
        <Stack.Screen name={ROUTES.NOTIFICATIONS} component={Notifications} />
        <Stack.Screen name={ROUTES.PROFILE} component={Profile} />
        <Stack.Screen name={ROUTES.SEARCH} component={Search} />
        <Stack.Screen name={ROUTES.CART} component={Cart} />
        <Stack.Screen name={ROUTES.WISHLIST} component={WishList} />
        <Stack.Screen
          name={ROUTES.PRODUCT_DETAILS}
          component={ProductDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;
