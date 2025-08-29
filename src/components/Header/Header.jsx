import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { HeaderWrapper, LightModeIcon, DarkModeIcon } from "./Header.styled";
import TicTacToeLogo from "../../assets/svgs/tic-tac-toe.svg?react";

export default function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <HeaderWrapper>
      <TicTacToeLogo className="logo" />
      <span onClick={() => toggleTheme()}>
        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </span>
    </HeaderWrapper>
  );
}
