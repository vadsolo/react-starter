import 'styled-components';
import { Theme as CustomTheme } from './themes';

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
