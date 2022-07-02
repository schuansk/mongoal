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

type NavbarProps = {
  name: keyof RootStackParamList;
};

const Navbar: React.FC<NavbarProps> = ({ name }) => {
  const navigation = useNavigation<Screens>();

  const navigator = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
  };

  return (
    <Container>
      <Option onPress={() => navigator('Home')}>
        <HomeIcon selected={name === 'Home'} />
      </Option>
      <Option onPress={() => navigator('Category')}>
        <CategoryIcon selected={name === 'Category'} />
      </Option>
      <Option>
        <BalanceIcon selected={name === 'Home'} />
      </Option>
      <Option>
        <SettingsIcon selected={name === 'Home'} />
      </Option>
    </Container>
  );
};

export default Navbar;
