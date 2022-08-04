import React from 'react';
import { useGoal } from '../../../hooks/goal';
import {
  Container,
  Content,
  EditIcon,
  GoalPercentage,
  GoalPercentageContainer,
  GoalValue,
  GoalValueContainer,
  Title,
} from './styles';

type GoalIndicatorProps = {
  toggleModal(): void;
};

const GoalIndicador: React.FC<GoalIndicatorProps> = ({ toggleModal }) => {
  const [width, setWidth] = React.useState(24);
  const { goal, balance } = useGoal();

  const calculateGoalIndicatorWidth = React.useCallback(() => {
    const px = 30;
    const currentBalance = balance.value;
    if (goal.value > 0 && currentBalance !== undefined) {
      const currentPosition = Math.floor(
        (currentBalance / 100 / (goal.value / 100)) * 10,
      );
      setWidth(currentPosition * px);
      return;
    }
    setWidth(0);
  }, [goal, balance]);

  React.useEffect(() => {
    calculateGoalIndicatorWidth();
  }, [calculateGoalIndicatorWidth, goal]);

  return (
    <Container>
      <Content>
        <Title>Minha meta</Title>
        <GoalPercentageContainer>
          <GoalPercentage width={width} />
        </GoalPercentageContainer>
        <GoalValueContainer onPress={toggleModal}>
          <GoalValue>{goal.formattedValue}</GoalValue>
          <EditIcon />
        </GoalValueContainer>
      </Content>
    </Container>
  );
};

export default GoalIndicador;
