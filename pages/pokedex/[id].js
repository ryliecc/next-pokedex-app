import { useRouter } from "next/router";
import { styled } from "styled-components";
import usePokedex from "../../swr/usePokedex";
import Navigation from "../../components/Navigation";
import DexPokemonItem from "../../components/DexPokemonItem";

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
const PokeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border: 0.4em double black;
  border-radius: 1em;
  background-color: #dcedc1;
  list-style: none;
  gap: 0.8em;
  padding: 0.8em;
`;
const Pokemon = styled.li`
  font-size: 1.2em;
  border: 0.2em solid black;
  border-radius: 0.4em;
  padding: 0.2em;
  width: 5em;
  height: 5em;
  text-align: center;
  position: relative;
`;

const EntryNumber = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  font-stretch: ultra-condensed;
  font-size: 3em;
  top: 0.15em;
  left: 0;
  bottom: 0;
  opacity: 20%;
`;

const PokemonName = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 6.4em;
  right: 0;
  left: 0;
  font-size: 0.6em;
`;

export default function PokedexPage() {
  const router = useRouter();
  const { id } = router.query;
  const { pokedex, isLoading, isError } = usePokedex(id);

  const enPokedexNameArr = pokedex?.names.find(
    (name) => name.language.name === "en"
  );
  const enPokedexName = enPokedexNameArr?.name;
  const enDescriptionArr = pokedex?.descriptions.find(
    (description) => description.language.name === "en"
  );
  const enDescription = enDescriptionArr?.description;

  if (isLoading) {
    return (
      <>
        <div>Loading ...</div>
        <Navigation />
      </>
    );
  }
  if (isError) {
    return (
      <>
        <div>Error ...</div>
        <Navigation />
      </>
    );
  }
  return (
    <>
      <Header>
        <Title>{enPokedexName} Dex</Title>
      </Header>
      <Main>
        <PokeList>
          {pokedex?.pokemon_entries.map((pokemon) => {
            return (
              <DexPokemonItem
                key={pokemon.entry_number}
                pokedexEntry={pokemon}
              ></DexPokemonItem>
            );
          })}
        </PokeList>
      </Main>
      <div>Description: {enDescription}</div>
      <Navigation />
    </>
  );
}
