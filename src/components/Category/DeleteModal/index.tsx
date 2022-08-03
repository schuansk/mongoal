/* eslint no-param-reassign: ["error", { "props": false }] */
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
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
  categoryId?: string;
  modalRef: React.MutableRefObject<BottomSheetMethods>;
  handleChange(index: number): void;
};

const DeleteCategoryModal: React.FC<ModalProps> = ({
  modalRef,
  categoryId,
  handleChange,
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
      modalRef.current?.close();
    } catch (error) {
      console.log(error);
    }
  }, [category, modalRef]);

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
    <Modal defaultHeight={600} modalRef={modalRef} handleChange={handleChange}>
      <ModalTitle>Apagar {category.name}?</ModalTitle>
      <ModalContent>
        <ModalSection>
          <DeleteCategoryButton delete onPress={deleteCategory}>
            <ButtonTitle delete>Sim</ButtonTitle>
          </DeleteCategoryButton>
        </ModalSection>
      </ModalContent>
    </Modal>
  );
};

export default DeleteCategoryModal;
