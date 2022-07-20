import { GoalProvider } from './goal';

type Props = {
  children: React.ReactNode;
};

const AppProvider: React.FC<Props> = ({ children }) => {
  return <GoalProvider>{children}</GoalProvider>;
};

export default AppProvider;
