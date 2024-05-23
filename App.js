import {View, Text, StatusBar, LogBox} from 'react-native';
import React from 'react';

import {Provider} from 'react-redux';
import {persistor, store} from './src/Redux/store';
import MainNav from './src/Navigation/MainNav';
import {PersistGate} from 'redux-persist/integration/react';
import {PaperProvider} from 'react-native-paper';


LogBox.ignoreAllLogs();
const App = () => {
  StatusBar.setBackgroundColor('transparent');
  StatusBar.setTranslucent(true);
  return (
    <Provider store={store}>
      <PaperProvider>
        <PersistGate persistor={persistor}>
          <MainNav />
        </PersistGate>
      </PaperProvider>
    </Provider>
  );
};

export default App;
