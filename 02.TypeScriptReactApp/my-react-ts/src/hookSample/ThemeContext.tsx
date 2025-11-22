import { createContext } from "react";
import type { PaletteMode } from '@mui/material';

export type ThemeContextType = {
  mode: PaletteMode,
  toggleMode: () => void
};

export default createContext<ThemeContextType>({
  mode: 'light',
  toggleMode: () => {}
});
