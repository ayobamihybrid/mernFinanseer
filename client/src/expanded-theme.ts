import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [key: number]: string;
  }
  interface Palette {
    tertiary: PaletteColor;
  }
}

// import { Palette, PaletteColor } from '@mui/material/styles/createPalette';

// declare module '@mui/material/styles/createPalette' {
//   export interface PaletteColor {
//     [key: number]: string;
//   }
//   export interface Palette {
//     tertiary: PaletteColor;
//   }
// }