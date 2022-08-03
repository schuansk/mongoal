/* eslint no-param-reassign: ["error", { "props": false }] */
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
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
  SelectContainer,
} from './styles';

type ModalProps = {
  categoryId?: string;
  modalRef: React.MutableRefObject<BottomSheetMethods>;
  handleChange(index: number): void;
};

const CategoryModal: React.FC<ModalProps> = ({
  categoryId,
  modalRef,
  handleChange,
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

  const reset = React.useCallback(() => {
    setCategoryName('');
    setSelectedIcon('category');
    modalRef.current?.close();
  }, [modalRef]);

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
        reset();
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
      } else {
        reset();
      }
    }
    return () => {
      setIsMounted(false);
    };
  }, [categoryId, getCategory, isMounted, reset]);

  React.useEffect(() => {
    if (isMounted) {
      setIcons(AvailableIcons.icons);
    }
    return () => {
      setIsMounted(false);
    };
  }, [isMounted, reset]);

  return (
    <Modal modalRef={modalRef} defaultHeight={540} handleChange={handleChange}>
      <ModalTitle>{categoryId ? 'Editar' : 'Criar nova'} categoria</ModalTitle>
      <ModalContent>
        <ModalSection>
          {isLoadingIcon ? (
            <LoadingIcon />
          ) : (
            <SelectContainer>
              <Select
                ItemElement={IconItem}
                defaultItem={selectedIcon}
                callback={(icon: string) => setSelectedIcon(icon)}
                data={icons}
                keyExtractor={keyExtractor}
                isIcon
              />
            </SelectContainer>
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
