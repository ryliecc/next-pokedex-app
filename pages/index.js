import styled from "styled-components";
import PokemonOfTheDay from "../components/PokemonOfTheDay";
import Navigation from "../components/Navigation";
import GenerationButtons from "../components/GenerationButtons";

const Header = styled.header`
  background-color: #ff00aa;
  padding: 0.8em;
`;

const Title = styled.h1`
  background-color: #00aaff;
  text-align: center;
  padding: 0.2em;
  color: #aa00ff;
`;

const Main = styled.main`
  background-color: #00aaff;
  padding: 0.6em;
  position: relative;
  top: 0em;
  padding-bottom: 3.2em;
`;

const Footer = styled.footer`
  background-color: #ff00aa;
`;

const Credits = styled.p`
  color: #aa00fff;
`;

export default function HomePage() {
  return (
    <>
      <Header>
        <Title>Pokédex App</Title>
      </Header>
      <Main>
        <PokemonOfTheDay />
        <GenerationButtons />
      </Main>
      <Footer>
        <Credits>Made by ryliecc</Credits>
        <Navigation />
      </Footer>
    </>
  );
}
