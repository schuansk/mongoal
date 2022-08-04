/* eslint-disable no-param-reassign */
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { database } from '../../../database';
import AccountModel from '../../../database/models/accountModel';
import CategoryModel from '../../../database/models/categoryModel';
import TransactionModel from '../../../database/models/transactionModel';
import { useGoal } from '../../../hooks/goal';
import Input from '../../Input';
import Modal, { ModalProps } from '../../Modal';
import Select from '../../Select';
import AccountItem from '../AccountItem';
import {
  ConfirmIcon,
  Content,
  CreateTransactionButton,
  ModalSection,
  SelectContainer,
  TransactionTypeContainer,
  TransactionTypeIcon,
} from './styles';

interface CreateTransactionProps
  extends Pick<ModalProps, 'handleChange' | 'modalRef'> {
  closed: boolean;
}

const CreateTransaction: React.FC<CreateTransactionProps> = ({
  closed,
  handleChange,
  modalRef,
}) => {
  const [accounts, setAccounts] = React.useState<AccountModel[]>([]);
  const [categories, setCategories] = React.useState<CategoryModel[]>([]);
  const [value, setValue] = React.useState('');
  const [selectedAccount, setSelectedAccount] = React.useState<AccountModel>(
    {} as AccountModel,
  );
  const [selectedCategory, setSelectedCategory] = React.useState<CategoryModel>(
    {} as CategoryModel,
  );
  const [transactionType, setTransactionType] = React.useState<
    'deposit' | 'withdrawal'
  >('deposit');
  const { updateBalance } = useGoal();

  const keyExtractor = ({ id }) => id;

  const reset = React.useCallback(() => {
    modalRef.current?.close();
    setValue('');
    setSelectedAccount({} as AccountModel);
    setSelectedCategory({} as CategoryModel);
    setTransactionType('deposit');
  }, [modalRef]);

  const getData = React.useCallback(async () => {
    const accountCollection = await database
      .get<AccountModel>('accounts')
      .query()
      .fetch();
    setAccounts(accountCollection);

    const categoryCollection = await database
      .get<CategoryModel>('categories')
      .query()
      .fetch();
    setCategories(categoryCollection);
  }, []);

  const handleSubmit = React.useCallback(async () => {
    if (selectedAccount.id === '' || selectedCategory.id === '' || value === '')
      return;
    const valueToCents = Number(value) * 100;
    await database.write(async () => {
      const response = await database
        .get<TransactionModel>('transactions')
        .create(transaction => {
          transaction.value = valueToCents;
          transaction.account.id = selectedAccount.id;
          transaction.category.id = selectedCategory.id;
          transaction.deposit = transactionType === 'deposit';
        });
      updateBalance(response);
    });
    reset();
  }, [
    reset,
    selectedAccount.id,
    selectedCategory.id,
    transactionType,
    updateBalance,
    value,
  ]);

  React.useEffect(() => {
    if (closed) {
      reset();
    }
  }, [closed, reset]);

  useFocusEffect(
    React.useCallback(() => {
      getData();
    }, [getData]),
  );

  return (
    <Modal modalRef={modalRef} defaultHeight={360} handleChange={handleChange}>
      <Content>
        <ModalSection>
          <Input
            defaultValue={value}
            placeholder="0,00"
            callback={e => setValue(e)}
            keyboardType="decimal-pad"
          />
        </ModalSection>
        <ModalSection>
          <SelectContainer>
            <Select
              ItemElement={AccountItem}
              callback={account =>
                setSelectedAccount(account as unknown as AccountModel)
              }
              data={accounts}
              defaultItem={selectedAccount.name || 'Selecionar conta'}
              keyExtractor={keyExtractor}
            />
          </SelectContainer>
        </ModalSection>
        <ModalSection>
          <SelectContainer>
            <Select
              ItemElement={AccountItem}
              callback={category =>
                setSelectedCategory(category as unknown as CategoryModel)
              }
              data={categories}
              defaultItem={selectedCategory.name || 'Selecionar categoria'}
              keyExtractor={keyExtractor}
            />
          </SelectContainer>
        </ModalSection>
        <ModalSection>
          <TransactionTypeContainer
            deposit
            selected={transactionType === 'deposit'}
            onPress={() => setTransactionType('deposit')}
          >
            <TransactionTypeIcon
              name="arrow-top-right"
              deposit
              selected={transactionType === 'deposit'}
            />
          </TransactionTypeContainer>
          <TransactionTypeContainer
            selected={transactionType === 'withdrawal'}
            onPress={() => setTransactionType('withdrawal')}
          >
            <TransactionTypeIcon
              name="arrow-bottom-left"
              selected={transactionType === 'withdrawal'}
            />
          </TransactionTypeContainer>
        </ModalSection>
        <ModalSection>
          <CreateTransactionButton onPress={() => handleSubmit()}>
            <ConfirmIcon />
          </CreateTransactionButton>
        </ModalSection>
      </Content>
    </Modal>
  );
};

export default CreateTransaction;
