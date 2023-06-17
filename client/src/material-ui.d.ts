// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Palette, PaletteColor } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface PaletteColor {
    [key: number]: string;
  }
  interface Palette {
    tertiary: PaletteColor;
  }
}

// import {
//   Palette as MuiPalette,
//   PaletteColor as MuiPaletteColor,
// } from '@mui/material/styles/createPalette';

// declare module '@mui/material/styles/createPalette' {
//   interface PaletteColor extends MuiPaletteColor {
//     [key: number]: string;
//   }

//   interface Palette extends MuiPalette {
//     tertiary: PaletteColor;
//   }
// }




