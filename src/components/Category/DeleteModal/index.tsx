/* eslint no-param-reassign: ["error", { "props": false }] */
import React from 'react';
import { database } from '../../../database';
import CategoryModel from '../../../database/models/categoryModel';
import Modal from '../../Modal';
import {
  ButtonTitle,
  DeleteCategoryButton,
  ModalContent,
  ModalSection,
  ModalTitle,
} from './styles';

type ModalProps = {
  toggleModal(): void;
  isVisible: boolean;
  categoryId?: string;
};

const DeleteCategoryModal: React.FC<ModalProps> = ({
  toggleModal,
  isVisible,
  categoryId,
}) => {
  const [category, setCategory] = React.useState<CategoryModel>(
    {} as CategoryModel,
  );
  const [isMounted, setIsMounted] = React.useState(false);

  const getCategory = React.useCallback(
    async (id: string) => {
      const response = await database.get<CategoryModel>('categories').find(id);
      if (isMounted) {
        setCategory(response);
      }
    },
    [isMounted],
  );

  const deleteCategory = React.useCallback(async () => {
    try {
      await database.write(async () => {
        await category.destroyPermanently();
      });
      toggleModal();
    } catch (error) {
      console.log(error);
    }
  }, [category, toggleModal]);

  React.useEffect(() => {
    setIsMounted(true);
    if (isMounted) {
      if (categoryId) {
        getCategory(categoryId);
      }
    }
    return () => {
      setIsMounted(false);
    };
  }, [categoryId, getCategory, isMounted]);

  return (
    <Modal toggleModal={toggleModal} isVisible={isVisible} height={0.22}>
      <ModalTitle>Apagar {category.name}?</ModalTitle>
      <ModalContent>
        <ModalSection>
          <DeleteCategoryButton delete onPress={deleteCategory}>
            <ButtonTitle delete>Sim</ButtonTitle>
          </DeleteCategoryButton>
          <DeleteCategoryButton onPress={toggleModal}>
            <ButtonTitle>Cancelar</ButtonTitle>
          </DeleteCategoryButton>
        </ModalSection>
      </ModalContent>
    </Modal>
  );
};

export default DeleteCategoryModal;
