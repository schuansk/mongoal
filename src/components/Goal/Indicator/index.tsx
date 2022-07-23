import React from 'react';
import { useGoal } from '../../../hooks/goal';
import GoalModal from '../Modal';
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

const GoalIndicador: React.FC = () => {
  const [width, setWidth] = React.useState(24);
  const [isVisible, setIsVisible] = React.useState(false);
  const { goal } = useGoal();

  const calculateGoalIndicatorWidth = React.useCallback((value: number) => {
    const px = 30;
    const currentBalance = 1000;
    if (value > 0) {
      const currentPosition = Math.floor(
        (currentBalance / 100 / (value / 100)) * 10,
      );
      setWidth(currentPosition * px);
    }
  }, []);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  React.useEffect(() => {
    calculateGoalIndicatorWidth(goal.value);
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
      <GoalModal isVisible={isVisible} toggleModal={toggleModal} />
    </Container>
  );
};

export default GoalIndicador;
