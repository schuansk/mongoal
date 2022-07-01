import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from '../../../navigation';
import {
  BalanceIcon,
  CategoryIcon,
  Container,
  HomeIcon,
  Option,
  SettingsIcon,
} from './styles';

type Screens = NativeStackNavigationProp<RootStackParamList>;

const Navbar: React.FC = () => {
  const [currentScreen, setCurrentScreen] = React.useState('Home');
  const navigation = useNavigation<Screens>();

  const navigator = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
    setCurrentScreen(screen);
  };

  return (
    <Container>
      <Option onPress={() => navigator('Home')}>
        <HomeIcon selected={currentScreen === 'Home'} />
      </Option>
      <Option onPress={() => navigator('Category')}>
        <CategoryIcon selected={currentScreen === 'Category'} />
      </Option>
      <Option>
        <BalanceIcon selected={currentScreen === 'Balance'} />
      </Option>
      <Option>
        <SettingsIcon selected={currentScreen === 'Settings'} />
      </Option>
    </Container>
  );
};

export default Navbar;
