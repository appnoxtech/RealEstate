import {Platform, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {store, persistor} from './src/redux/store/store';
import StackNavigation from './src/navigation/StackNavigation';
import {ActivityIndicator} from 'react-native';

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#8BC83F" />
          </View>
        }
        persistor={persistor}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
export default App;
