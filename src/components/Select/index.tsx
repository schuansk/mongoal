import React from 'react';
import {
  Container,
  CurrentSelection,
  CurrentSelectionTitle,
  GoBack,
  GoBackItem,
  Options,
  OptionsContent,
  OptionsFooter,
  OptionsSelectorCancel,
  OptionsSelectorCancelTitle,
  OptionsSelectorContainer,
  OptionsSelectorHeader,
  OptionsSelectorTitle,
  SelectedItem,
} from './styles';

export type ItemProps = {
  item: unknown;
  selectedItem: string;
  handleSelection(item: string): void;
};

type SelectProps = {
  defaultItem: string;
  callback(item: string): void;
  data: Array<unknown>;
  ItemElement({
    item,
    selectedItem,
    handleSelection,
  }: ItemProps): React.ReactElement;
};

const Select: React.FC<SelectProps> = ({
  defaultItem,
  callback,
  ItemElement,
  data,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState<string>(defaultItem);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSelection = (item: string) => {
    setSelectedItem(item);
    callback(item);
    toggleModal();
  };

  const keyExtractor = (id: string) => id;

  const listFooterComponent = () => <OptionsFooter />;

  const renderItem = ({ item }) => (
    <ItemElement
      item={item}
      selectedItem={selectedItem}
      handleSelection={() => handleSelection(item)}
    />
  );

  return (
    <Container>
      <CurrentSelection onPress={toggleModal}>
        <CurrentSelectionTitle>
          <SelectedItem name={selectedItem} />
        </CurrentSelectionTitle>
      </CurrentSelection>
      <OptionsSelectorContainer
        visible={isOpen}
        animationType="slide"
        onRequestClose={() => setIsOpen(false)}
      >
        <OptionsSelectorHeader>
          <GoBack onPress={toggleModal}>
            <GoBackItem />
          </GoBack>
          <OptionsSelectorTitle>Selecione um ícone</OptionsSelectorTitle>
          <OptionsSelectorCancel onPress={toggleModal}>
            <OptionsSelectorCancelTitle>Cancelar</OptionsSelectorCancelTitle>
          </OptionsSelectorCancel>
        </OptionsSelectorHeader>
        <OptionsContent>
          <Options
            initialNumToRender={4}
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ListFooterComponent={listFooterComponent}
          />
        </OptionsContent>
      </OptionsSelectorContainer>
    </Container>
  );
};

export default Select;
