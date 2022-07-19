import React from 'react';
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

  const calculateGoalIndicatorWidth = React.useCallback(() => {
    const px = 30;
    const currentBalance = 1000;
    const goal = 8000;
    const currentPosition = Math.floor((currentBalance / goal) * 10);
    if (currentPosition === 0) {
      setWidth(px);
      return;
    }
    setWidth(currentPosition * px);
  }, []);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

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
        <GoalValueContainer onPress={toggleModal}>
          <GoalValue>R$ 8.000,00</GoalValue>
          <EditIcon />
        </GoalValueContainer>
      </Content>
      <GoalModal isVisible={isVisible} toggleModal={toggleModal} />
    </Container>
  );
};

export default GoalIndicador;
