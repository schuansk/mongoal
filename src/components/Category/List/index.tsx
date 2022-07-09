import React from 'react';
import { ListRenderItem } from 'react-native';
import { database } from '../../../database';
import CategoryModel from '../../../database/models/categoryModel';
import CategoryItem from '../Item';
import { Container, Content, ListFooter, RowSeparator } from './styles';

export type CategoryData = {
  id: string;
  name: string;
  icon: string;
};
const CategoryList: React.FC = () => {
  const [categories, setCategories] = React.useState<CategoryData[]>([]);

  const renderItem: ListRenderItem<CategoryData> = ({ item: category }) => {
    return <CategoryItem key={category.id} category={category} />;
  };

  React.useEffect(() => {
    (async () => {
      const response = await database.collections
        .get<CategoryModel>('categories')
        .query()
        .fetch();
      setCategories(response);
    })();
  }, []);

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

export default CategoryList;
