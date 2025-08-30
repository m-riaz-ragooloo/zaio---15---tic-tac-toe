import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { HeaderWrapper, LightModeIcon, DarkModeIcon } from "./Header.styled";
import TicTacToeLogo from "../../assets/svgs/tic-tac-toe.svg?react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <TicTacToeLogo onClick={() => navigate("/")} className="logo" />
      <span onClick={() => toggleTheme()}>
        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </span>
    </HeaderWrapper>
  );
}
