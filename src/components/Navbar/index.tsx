import React from 'react';
import {
  BalanceIcon,
  CategoryIcon,
  Container,
  HomeIcon,
  Option,
  SettingsIcon,
} from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Option>
        <HomeIcon />
      </Option>
      <Option>
        <CategoryIcon />
      </Option>
      <Option>
        <BalanceIcon />
      </Option>
      <Option>
        <SettingsIcon />
      </Option>
    </Container>
  );
};

export default Navbar;
