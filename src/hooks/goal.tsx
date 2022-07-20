import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { formatValue } from '../utils';

type Props = {
  children: React.ReactNode;
};

type Goal = {
  value: number;
  formattedValue: string;
};

interface GoalContextData {
  goal: Goal;
  update(value: number): void;
}

const GoalContext = React.createContext<GoalContextData>({} as GoalContextData);

const GoalProvider: React.FC<Props> = ({ children }) => {
  const [goal, setGoal] = React.useState<Goal>({} as Goal);

  React.useEffect(() => {
    (async (): Promise<void> => {
      const value = await AsyncStorage.getItem('@mongoal:value');
      const goalValue = Number(value);
      if (Number.isNaN(goalValue)) {
        setGoal({ value: goalValue, formattedValue: formatValue(goalValue) });
      }
    })();
  }, []);

  const update = async (value: number) => {
    try {
      const goalValue = String(value);
      await AsyncStorage.setItem('@mongoal:value', goalValue);
      setGoal({
        value,
        formattedValue: formatValue(value),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const value = React.useMemo(() => ({ goal, update }), [goal]);

  return <GoalContext.Provider value={value}>{children}</GoalContext.Provider>;
};

const useGoal = (): GoalContextData => {
  const context = React.useContext(GoalContext);

  if (!context) throw new Error('useGoal must be user within an GoalProvider');

  return context;
};

export { GoalProvider, useGoal };
