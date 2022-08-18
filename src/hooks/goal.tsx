import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { database } from '../database';
import TransactionModel from '../database/models/transactionModel';
import { formatValue } from '../utils';

type Props = {
  children: React.ReactNode;
};

type Goal = {
  value: number;
  formattedValue: string;
};

type Balance = {
  value: number;
  formattedValue: string;
};

interface GoalContextData {
  goal: Goal;
  balance: Balance;
  loading: boolean;
  updateGoal(value: number): void;
  updateBalance(transaction: TransactionModel): void;
}

const GoalContext = React.createContext<GoalContextData>({} as GoalContextData);

const GoalProvider: React.FC<Props> = ({ children }) => {
  const [goal, setGoal] = React.useState<Goal>({} as Goal);
  const [balance, setBalance] = React.useState<Balance>({} as Balance);
  const [loading, setLoading] = React.useState(true);

  const updateGoal = async (value: number) => {
    try {
      const centsToValue = value / 100;
      const goalValue = String(centsToValue);
      await AsyncStorage.setItem('@mongoal:value', goalValue);
      setGoal({
        value,
        formattedValue: formatValue(centsToValue),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateBalance = React.useCallback(
    (transaction: TransactionModel) => {
      let currentBalance = balance.value;
      if (transaction.deposit) {
        currentBalance += transaction.value;
      } else {
        currentBalance -= transaction.value;
      }
      const centsToValue = currentBalance / 100;
      setBalance({
        value: currentBalance,
        formattedValue: formatValue(centsToValue),
      });
    },
    [balance],
  );

  const getCurrentBalance = React.useCallback(async () => {
    let currentBalance = 0;
    const transactions = await database.collections
      .get<TransactionModel>('transactions')
      .query()
      .fetch();
    transactions.forEach(transaction => {
      if (transaction.deposit) {
        currentBalance += transaction.value;
      } else {
        currentBalance -= transaction.value;
      }
    });
    const centsToValue = currentBalance / 100;
    setBalance({
      value: currentBalance,
      formattedValue: formatValue(centsToValue),
    });
  }, []);

  const value = React.useMemo(
    () => ({ goal, updateGoal, loading, balance, updateBalance }),
    [balance, goal, loading, updateBalance],
  );

  React.useEffect(() => {
    (async () => {
      const storedValue = await AsyncStorage.getItem('@mongoal:value');
      const goalValue = Number(storedValue || 0);
      if (!Number.isNaN(goalValue)) {
        const centsToValue = goalValue;
        setGoal({
          value: centsToValue * 100,
          formattedValue: formatValue(centsToValue),
        });
      }
      getCurrentBalance();
      setLoading(false);
    })();
  }, [getCurrentBalance]);

  return <GoalContext.Provider value={value}>{children}</GoalContext.Provider>;
};

const useGoal = (): GoalContextData => {
  const context = React.useContext(GoalContext);

  if (!context) throw new Error('useGoal must be user within an GoalProvider');

  return context;
};

export { GoalProvider, useGoal };
