// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Palette, PaletteColor } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  export interface PaletteColor {
    [key: number]: string;
  }
  export interface Palette {
    tertiary: PaletteColor;
  }
}
