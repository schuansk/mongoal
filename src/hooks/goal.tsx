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
  loading: boolean;
  update(value: number): void;
}

const GoalContext = React.createContext<GoalContextData>({} as GoalContextData);

const GoalProvider: React.FC<Props> = ({ children }) => {
  const [goal, setGoal] = React.useState<Goal>({} as Goal);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      const value = await AsyncStorage.getItem('@mongoal:value');
      const goalValue = Number(value || 0);
      if (!Number.isNaN(goalValue)) {
        const centsToValue = goalValue / 100;
        setGoal({
          value: centsToValue,
          formattedValue: formatValue(centsToValue),
        });
      }
      setLoading(false);
    })();
  }, []);

  const update = async (value: number) => {
    try {
      const goalValue = String(value * 100);
      await AsyncStorage.setItem('@mongoal:value', goalValue);
      setGoal({
        value,
        formattedValue: formatValue(value),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const value = React.useMemo(
    () => ({ goal, update, loading }),
    [goal, loading],
  );

  return <GoalContext.Provider value={value}>{children}</GoalContext.Provider>;
};

const useGoal = (): GoalContextData => {
  const context = React.useContext(GoalContext);

  if (!context) throw new Error('useGoal must be user within an GoalProvider');

  return context;
};

export { GoalProvider, useGoal };
