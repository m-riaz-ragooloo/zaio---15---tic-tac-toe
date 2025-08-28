import { useContext } from "react";
import Router from "./Router";
import { GlobalStyle } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { ThemeContext } from "./contexts/ThemeContext";
import ThemeContextProvider from "./contexts/ThemeContextProvider";

export default function App() {
  const {theme} = useContext(ThemeContext)

  const mode = (theme === "light" ? lightTheme : darkTheme);

  return (
    <ThemeProvider theme={mode}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}
