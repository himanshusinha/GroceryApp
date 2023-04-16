import React, {useCallback, useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {Provider, useSelector} from 'react-redux';
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/es/integration/react';
import NetInfo from '@react-native-community/netinfo';
import NoInternetModal from './src/components/comman/modal/NoInternetModal/NoInternetModal';
import Routes from './src/navigations/Routes';
 
const App = () => {
  const [isOffline, setOfflineStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setOfflineStatus(offline);
    });
    getNetWorkInfo();
    return () => removeNetInfoSubscription();
  }, [isOffline]);

  const getNetWorkInfo = useCallback(() => {
    setLoading(true);
  }, []);
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
      {isOffline ? (
        <NoInternetModal show={isOffline} isRetrying={loading} />
      ) : null}
    </>
  );
};
export default App;
