import React from 'react';
import { ItemProps } from '../../Select';
import {
  CheckIcon,
  OptionContainer,
  OptionContent,
  OptionIcon,
} from './styles';

interface IconItemProps
  extends Pick<ItemProps, 'selectedItem' | 'handleSelection'> {
  item: string;
}

const IconItem: React.FC<IconItemProps> = ({
  item,
  selectedItem,
  handleSelection,
}) => (
  <OptionContainer
    selected={selectedItem === item}
    onPress={() => handleSelection(item)}
  >
    <OptionContent>
      <OptionIcon name={item} />
      {selectedItem === item && <CheckIcon />}
    </OptionContent>
  </OptionContainer>
);

export default IconItem;
