import React from 'react';
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

  const calculateGoalIndicatorWidth = React.useCallback(() => {
    const px = 24;
    const currentBalance = 1000;
    const goal = 8000;
    const currentPosition = Math.floor((currentBalance / goal) * 10);
    if (currentPosition === 0) {
      setWidth(px);
      return;
    }
    setWidth(currentPosition * px);
  }, []);

  React.useEffect(() => {
    calculateGoalIndicatorWidth();
  }, [calculateGoalIndicatorWidth]);

  return (
    <Container>
      <Content>
        <Title>Minha meta</Title>
        <GoalPercentageContainer>
          <GoalPercentage width={width} />
        </GoalPercentageContainer>
        <GoalValueContainer>
          <GoalValue>R$ 8.000,00</GoalValue>
          <EditIcon />
        </GoalValueContainer>
      </Content>
    </Container>
  );
};

export default GoalIndicador;
