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

type CategoryItemProps = {
  category: CategoryModel;
  onPress(): void;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ category, onPress }) => {
  return (
    <Container onPress={onPress}>
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
