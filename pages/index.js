import styled from "styled-components";

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
  height: 100%;
  padding: 50%;
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
      <Main />
      <Footer>
        <Credits>Made by ryliecc</Credits>
      </Footer>
    </>
  );
}
