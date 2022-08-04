import BottomSheet from '@gorhom/bottom-sheet';
import React from 'react';
import { Keyboard } from 'react-native';
import ActionButton from '../../components/ActionButton';
import GoalIndicador from '../../components/Goal/Indicator';
import GoalModal from '../../components/Goal/Modal';
import Navbar from '../../components/Navbar';
import CreateTransaction from '../../components/Transaction/Create';
import TranstionList from '../../components/Transaction/List';
import { useGoal } from '../../hooks/goal';
import {
  ActionButtonContainer,
  Container,
  Content,
  CurrentBalance,
  Header,
} from './styles';

const Home: React.FC = () => {
  const { balance } = useGoal();
  const modalRef = React.useRef<BottomSheet>(null);
  const modalGoalRef = React.useRef<BottomSheet>(null);
  const [closed, setClosed] = React.useState(false);
  const [goalClosed, setGoalClosed] = React.useState(false);

  const toggleModal = () => {
    modalRef.current?.expand();
    setClosed(false);
  };

  const toggleGoalModal = () => {
    modalGoalRef.current?.expand();
    setGoalClosed(false);
  };

  const handleChange = (index: number) => {
    if (index <= 0) {
      Keyboard.dismiss();
      setClosed(true);
      setGoalClosed(true);
    }
  };

  return (
    <Container>
      <Content>
        <Header>
          <CurrentBalance>{balance.formattedValue}</CurrentBalance>
        </Header>
        <GoalIndicador toggleModal={toggleGoalModal} />
        <TranstionList />
      </Content>
      <ActionButtonContainer>
        <ActionButton onPress={toggleModal} />
      </ActionButtonContainer>
      <Navbar name="Home" />
      <CreateTransaction
        closed={closed}
        modalRef={modalRef}
        handleChange={handleChange}
      />
      <GoalModal
        closed={goalClosed}
        modalRef={modalGoalRef}
        handleChange={handleChange}
      />
    </Container>
  );
};

export default Home;
