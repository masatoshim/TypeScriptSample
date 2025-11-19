import { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { amber, grey } from "@mui/material/colors";
import { CssBaseline } from "@mui/material";
import ThemeContext from "./ThemeContext";

export default function MyThemeProvider({ children }){
  const [mode, setMode] = useState('light');
  // コンテキストに引き渡す情報を準備
  const themeConfig = {
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
      // mode値に応じてテーマを切り替え
      ...CssBaseline(mode === 'light'
      // ライトモードで利用するパレット
      ? {
        primary: amber,
      }
      // ダークモードで利用するパレット
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

}