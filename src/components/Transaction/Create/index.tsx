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

type CreateTransactionProps = Pick<ModalProps, 'isVisible' | 'toggleModal'>;

const CreateTransaction: React.FC<CreateTransactionProps> = ({
  isVisible,
  toggleModal,
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
    setSelectedAccount({} as AccountModel);
    setSelectedCategory({} as CategoryModel);
    setTransactionType('deposit');
    toggleModal();
  }, [
    selectedAccount.id,
    selectedCategory.id,
    toggleModal,
    transactionType,
    updateBalance,
    value,
  ]);

  useFocusEffect(
    React.useCallback(() => {
      getData();
    }, [getData]),
  );

  return (
    <Modal isVisible={isVisible} toggleModal={toggleModal} height={0.55}>
      <Content>
        <ModalSection>
          <Input
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
