import BottomSheet from '@gorhom/bottom-sheet';

import styled from 'styled-components/native';

export const Container = styled(BottomSheet).attrs(props => ({
  handleIndicatorStyle: { backgroundColor: props.theme.colors.gray_100 },
}))`
  border-radius: 24px;
  elevation: 10;
`;

export const Content = styled.View`
  flex: 1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 10px 10px 0 10px;
`;

export const Body = styled.View``;
