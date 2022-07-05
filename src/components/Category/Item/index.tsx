import React from 'react';
import { CategoryData } from '../List';
import {
  ActionIcon,
  CategoryName,
  Container,
  Description,
  Details,
  Icon,
  IconContainer,
} from './styles';

interface CategoryItemProps {
  category: CategoryData;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  return (
    <Container>
      <Description>
        <IconContainer>
          <Icon name="category" />
        </IconContainer>
        <Details>
          <CategoryName>{category.name}</CategoryName>
        </Details>
      </Description>
      <ActionIcon />
    </Container>
  );
};

export default CategoryItem;
