import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import Routes from './src/routes';
import stylertTheme from './src/theme';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <ThemeProvider theme={stylertTheme}>
        <View style={{ flex: 1 }}>
          <Routes />
        </View>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
