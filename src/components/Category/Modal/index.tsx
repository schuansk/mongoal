/* eslint no-param-reassign: ["error", { "props": false }] */
import React from 'react';
import { database } from '../../../database';
import CategoryModel from '../../../database/models/categoryModel';
import IconSelector, { MaterialIconName } from '../../IconSelector';
import Input from '../../Input';
import Modal from '../../Modal';
import {
  ConfirmIcon,
  CreateCategoryButton,
  ModalContent,
  ModalSection,
  ModalTitle,
} from './styles';

type ModalProps = {
  toggleModal(): void;
  isVisible: boolean;
};

const CategoryModal: React.FC<ModalProps> = ({ toggleModal, isVisible }) => {
  const [selectedIcon, setSelectedIcon] =
    React.useState<MaterialIconName>('category');
  const [categoryName, setCategoryName] = React.useState('');

  const handleAddNewCategory = React.useCallback(
    async (name: string, icon: string) => {
      try {
        await database.write(async () => {
          await database.collections
            .get<CategoryModel>('categories')
            .create(category => {
              category.name = name;
              category.icon = icon;
            });
        });
        setCategoryName('');
        setSelectedIcon('category');
        toggleModal();
      } catch (error) {
        console.log('error', error);
      }
    },
    [toggleModal],
  );

  const handleSubmit = React.useCallback(() => {
    if (categoryName === '') return;
    handleAddNewCategory(categoryName, selectedIcon);
  }, [categoryName, handleAddNewCategory, selectedIcon]);

  return (
    <Modal toggleModal={toggleModal} isVisible={isVisible} height={0.32}>
      <ModalTitle>Criar nova categoria</ModalTitle>
      <ModalContent>
        <ModalSection>
          <IconSelector
            defaultIcon={selectedIcon}
            callback={(icon: MaterialIconName) => setSelectedIcon(icon)}
          />
          <Input
            placeholder="Nome da categoria"
            callback={name => setCategoryName(name)}
          />
        </ModalSection>
        <ModalSection>
          <CreateCategoryButton onPress={() => handleSubmit()}>
            <ConfirmIcon />
          </CreateCategoryButton>
        </ModalSection>
      </ModalContent>
    </Modal>
  );
};

export default CategoryModal;
