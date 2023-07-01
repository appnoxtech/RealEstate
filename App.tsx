
import {Platform, StyleSheet, Text} from 'react-native';
import React, { useEffect, useRef } from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import { store, persistor } from './src/redux/store/store';
import StackNavigation from './src/navigation/StackNavigation';




const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App

