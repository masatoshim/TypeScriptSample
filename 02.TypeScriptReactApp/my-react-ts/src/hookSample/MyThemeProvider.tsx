import { type ReactNode, useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { amber, grey } from "@mui/material/colors";
import { CssBaseline, PaletteMode } from "@mui/material";
import ThemeContext, { type ThemeContextType } from "./ThemeContext";

type MyThemeProviderProps = {
  children: ReactNode
};

export default function MyThemeProvider({ children }: MyThemeProviderProps){
  const [mode, setMode] = useState<PaletteMode>('light');
  // コンテキストに引き渡す情報を準備
  const themeConfig: ThemeContextType = {
    mode,
    toggleMode: () => {
      setMode(prev => 
        prev === 'light' ? 'dark' : 'light'
      );
    }
  };
  // テーマを定義
  const theme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
          primary: amber,
        }
        : {
          primary: {
            main: grey[500],
            contrastText: '#fff'
          },
          background: {
            default: grey[900],
            paper: grey[900],
          },
        }),
      },
  });

  return (
    <ThemeContext value={themeConfig}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext>
  );
}