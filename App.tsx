import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, View } from 'react-native';
import Routes from './src/routes';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1 }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
