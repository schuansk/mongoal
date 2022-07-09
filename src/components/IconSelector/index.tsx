import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import AvailableIcons from './AvailableIcons.json';
import {
  CheckIcon,
  Container,
  CurrentSelection,
  CurrentSelectionTitle,
  GoBack,
  GoBackIcon,
  OptionContainer,
  OptionContent,
  OptionIcon,
  Options,
  OptionsContent,
  OptionsFooter,
  OptionsSelectorCancel,
  OptionsSelectorCancelTitle,
  OptionsSelectorContainer,
  OptionsSelectorHeader,
  OptionsSelectorTitle,
  SelectedIcon,
} from './styles';

type MaterialIconName = React.ComponentProps<typeof MaterialIcons>['name'];

type IconSelectorProps = {
  callback(icon: string): void;
};

const IconSelector: React.FC<IconSelectorProps> = ({ callback }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [icons, setIcons] = React.useState([]);
  const [selectedIcon, setSelectedIcon] =
    React.useState<MaterialIconName>('category');

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectIcon = (icon: MaterialIconName) => {
    setSelectedIcon(icon);
    toggleModal();
    callback(icon);
  };

  const keyExtractor = (icon: MaterialIconName) => icon;

  const renderItem = ({ item: icon }) => (
    <OptionContainer
      selected={selectedIcon === icon}
      onPress={() => handleSelectIcon(icon)}
    >
      <OptionContent>
        <OptionIcon name={icon} />
        {selectedIcon === icon && <CheckIcon />}
      </OptionContent>
    </OptionContainer>
  );

  const listFooterComponent = () => <OptionsFooter />;

  React.useEffect(() => {
    let isMounted = true;
    if (isMounted) setIcons(AvailableIcons.icons);
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Container>
      <CurrentSelection onPress={toggleModal}>
        <CurrentSelectionTitle>
          <SelectedIcon name={selectedIcon} />
        </CurrentSelectionTitle>
      </CurrentSelection>
      <OptionsSelectorContainer
        visible={isOpen}
        animationType="slide"
        onRequestClose={() => setIsOpen(false)}
      >
        <OptionsSelectorHeader>
          <GoBack onPress={toggleModal}>
            <GoBackIcon />
          </GoBack>
          <OptionsSelectorTitle>Selecione um ícone</OptionsSelectorTitle>
          <OptionsSelectorCancel onPress={toggleModal}>
            <OptionsSelectorCancelTitle>Cancelar</OptionsSelectorCancelTitle>
          </OptionsSelectorCancel>
        </OptionsSelectorHeader>
        <OptionsContent>
          <Options
            initialNumToRender={4}
            data={icons}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ListFooterComponent={listFooterComponent}
          />
        </OptionsContent>
      </OptionsSelectorContainer>
    </Container>
  );
};

export default IconSelector;
