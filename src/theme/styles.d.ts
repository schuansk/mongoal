import 'styled-components';

import { colors } from './colors';
import { constants } from './constants';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    constants: typeof constants;
  }
}
