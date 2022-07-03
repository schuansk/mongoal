import { NavigationContainer } from '@react-navigation/native';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';
import Routes from './src/routes';
import stylertTheme from './src/theme';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="default"
        backgroundColor={stylertTheme.colors.purple_700}
      />
      <ThemeProvider theme={stylertTheme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Routes />
        </GestureHandlerRootView>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
