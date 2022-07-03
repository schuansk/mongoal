import React from 'react';
import { Text } from 'react-native';
import Navbar from '../../components/Navbar';
import { Container } from './styles';

const Settings: React.FC = () => {
  return (
    <Container>
      <Text>Settings</Text>
      <Navbar name="Settings" action={() => console.log('settings')} />
    </Container>
  );
};

export default Settings;
