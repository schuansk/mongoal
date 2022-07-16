/* eslint no-param-reassign: ["error", { "props": false }] */
import React from 'react';
import { database } from '../../../database';
import CategoryModel from '../../../database/models/categoryModel';
import Input from '../../Input';
import Modal from '../../Modal';
import Select from '../../Select';
import IconItem from '../IconItem';
import AvailableIcons from '../IconItem/AvailableIcons.json';
import {
  ConfirmIcon,
  CreateCategoryButton,
  LoadingIcon,
  ModalContent,
  ModalSection,
  ModalTitle,
} from './styles';

type ModalProps = {
  toggleModal(): void;
  isVisible: boolean;
  categoryId?: string;
};

const CategoryModal: React.FC<ModalProps> = ({
  toggleModal,
  isVisible,
  categoryId,
}) => {
  const [selectedIcon, setSelectedIcon] = React.useState('category');
  const [categoryName, setCategoryName] = React.useState('');
  const [isLoadingIcon, setIsLoadingIcon] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);
  const [icons, setIcons] = React.useState([]);

  const getCategory = React.useCallback(
    async (id: string) => {
      const category = await database.get<CategoryModel>('categories').find(id);
      if (isMounted) {
        setCategoryName(category.name);
        setSelectedIcon(category.icon);
        setIsLoadingIcon(false);
      }
    },
    [isMounted],
  );

  const reset = React.useCallback(
    (changeModal = true) => {
      if (changeModal) toggleModal();
      setCategoryName('');
      setSelectedIcon('category');
    },
    [toggleModal],
  );

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
        reset(true);
      } catch (error) {
        console.log('error', error);
      }
    },
    [reset],
  );

  const handleEditCategory = React.useCallback(
    async (name: string, icon: string) => {
      try {
        await database.write(async () => {
          const category = await database
            .get<CategoryModel>('categories')
            .find(categoryId);

          await category.update(currentCategory => {
            currentCategory.name = name;
            currentCategory.icon = icon;
          });
        });
        reset();
      } catch (error) {
        console.log('error', error);
      }
    },
    [categoryId, reset],
  );

  const handleSubmit = React.useCallback(() => {
    if (categoryName === '') return;
    if (categoryId) {
      handleEditCategory(categoryName, selectedIcon);
      return;
    }
    handleAddNewCategory(categoryName, selectedIcon);
  }, [
    categoryId,
    categoryName,
    handleAddNewCategory,
    handleEditCategory,
    selectedIcon,
  ]);

  const keyExtractor = (id: string) => id;

  React.useEffect(() => {
    setIsMounted(true);
    if (isMounted) {
      if (categoryId) {
        getCategory(categoryId);
        setIsLoadingIcon(true);
      }
    }
    return () => {
      setIsMounted(false);
    };
  }, [categoryId, getCategory, isMounted]);

  React.useEffect(() => {
    if (isMounted) {
      if (!isVisible) reset(false);
      else setIcons(AvailableIcons.icons);
    }
    return () => {
      setIsMounted(false);
    };
  }, [isMounted, isVisible, reset]);

  return (
    <Modal toggleModal={toggleModal} isVisible={isVisible} height={0.32}>
      <ModalTitle>{categoryId ? 'Editar' : 'Criar nova'} categoria</ModalTitle>
      <ModalContent>
        <ModalSection>
          {isLoadingIcon ? (
            <LoadingIcon />
          ) : (
            <Select
              ItemElement={IconItem}
              defaultItem={selectedIcon}
              callback={(icon: string) => setSelectedIcon(icon)}
              data={icons}
              keyExtractor={keyExtractor}
            />
          )}

          <Input
            defaultValue={categoryName}
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
