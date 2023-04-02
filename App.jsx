import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import {PersistGate} from 'redux-persist/integration/react';
import Routes from './src/navigations/Routes';
import store from './src/redux/store';
let persistor = persistStore(store);
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};
export default App;
