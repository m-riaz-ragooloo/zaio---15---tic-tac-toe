import React from 'react';
import { Container } from './home.styled';
import { Subtitle, Title } from '../../styles/General.styled'
import Header from '../../components/Header/Header';

export default function Home() {
  return (
    <Container>
      <Title>TicTacToe</Title>
      <Subtitle>Play with your friends, highest score wins!</Subtitle>
    </Container>
  )
}

