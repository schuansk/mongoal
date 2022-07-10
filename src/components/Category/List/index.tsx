import { Q } from '@nozbe/watermelondb';
import withObservables from '@nozbe/with-observables';
import React from 'react';
import { ListRenderItem } from 'react-native';
import { database } from '../../../database';
import CategoryModel from '../../../database/models/categoryModel';
import CategoryItem from '../Item';
import { Container, Content, ListFooter, RowSeparator } from './styles';

interface ICategory {
  categories: CategoryModel[];
}

const categoryCollection = database.collections.get('categories');

const observeCategories = () =>
  categoryCollection.query(Q.sortBy('name', Q.asc)).observe();

const enhanceWithCategories = withObservables([], () => ({
  categories: observeCategories(),
}));

const CategoryList: React.FC<ICategory> = ({ categories }) => {
  const renderItem: ListRenderItem<CategoryModel> = ({ item: category }) => {
    return <CategoryItem key={category.id} category={category} />;
  };

  return (
    <Container>
      <Content
        data={categories}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={RowSeparator}
        ListFooterComponent={ListFooter}
      />
    </Container>
  );
};

const CategoryListRender = enhanceWithCategories(CategoryList);

export default CategoryListRender;
