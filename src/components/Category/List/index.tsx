import React from 'react';
import { ListRenderItem } from 'react-native';
import CategoryItem from '../Item';
import { Container, Content, ListFooter, RowSeparator } from './styles';

export type CategoryData = {
  id: string;
  name: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
};
const CategoryList: React.FC = () => {
  const [categories, setCategories] = React.useState<CategoryData[]>([]);

  const renderItem: ListRenderItem<CategoryData> = ({ item: category }) => {
    return <CategoryItem key={category.id} category={category} />;
  };

  React.useEffect(() => {
    const data = [
      {
        id: '1',
        name: 'Carro',
        icon: 'icon',
        createdAt: '01/01/2022',
        updatedAt: '01/01/2022',
      },
      {
        id: '2',
        name: 'Casa',
        icon: 'icon',
        createdAt: '01/01/2022',
        updatedAt: '01/01/2022',
      },
    ];
    setCategories(data);
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
