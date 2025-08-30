import React from 'react';
import { Container, Subtitle, Title } from '../../styles/General.styled';
import Button from '../../components/Button/Button';
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate()
  return (
    <Container>
      <Title>TicTacToe</Title>
      <Subtitle>Play with your friends, highest score wins!</Subtitle>
      <Button onClick={() => navigate("/game")}>Play Now</Button>
    </Container>
  )
}

