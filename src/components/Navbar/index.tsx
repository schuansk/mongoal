import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from '../../../navigation';
import {
  ActionButton,
  ActionContainer,
  ActionContent,
  ActionIcon,
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
  action(): void;
};

const Navbar: React.FC<NavbarProps> = ({ name, action }) => {
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
      <ActionContainer>
        <ActionContent>
          <ActionButton onPress={action}>
            <ActionIcon />
          </ActionButton>
        </ActionContent>
      </ActionContainer>
      <Option onPress={() => navigator('AccountBalance')}>
        <BalanceIcon selected={name === 'AccountBalance'} />
      </Option>
      <Option onPress={() => navigator('Settings')}>
        <SettingsIcon selected={name === 'Settings'} />
      </Option>
    </Container>
  );
};

export default Navbar;
