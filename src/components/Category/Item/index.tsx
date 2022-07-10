import React from 'react';
import CategoryModel from '../../../database/models/categoryModel';
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
  category: CategoryModel;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  return (
    <Container>
      <Description>
        <IconContainer>
          <Icon name={category.icon} />
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
