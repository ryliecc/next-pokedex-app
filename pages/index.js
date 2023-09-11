import styled from "styled-components";
import PokemonOfTheDay from "../components/PokemonOfTheDay";
import Navigation from "../components/Navigation";
import RegionButtons from "../components/RegionButtons";

const Header = styled.header`
  background-color: #dcedc1;
  padding: 0.8em;
`;

const Title = styled.h1`
  background-color: #ffd3b6;
  text-align: center;
  padding: 0.2em;
  color: #ff8b94;
`;

const Main = styled.main`
  background-color: #a8e6cf;
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
        <RegionButtons />
      </Main>
      <Footer>
        <Credits>Made by ryliecc</Credits>
        <Navigation />
      </Footer>
    </>
  );
}
