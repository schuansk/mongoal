import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useGoal } from '../hooks/goal';
import AccountBalance from '../screens/AccountBalance';
import Category from '../screens/Category';
import Home from '../screens/Home';
import { Container, Loader } from './styles';

const Stack = createNativeStackNavigator();
const Routes: React.FC = () => {
  const { loading } = useGoal();

  if (loading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="AccountBalance" component={AccountBalance} />
    </Stack.Navigator>
  );
};

export default Routes;
