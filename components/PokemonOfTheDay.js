import styled from "styled-components";
import { useState, useEffect } from "react";
import usePokemon from "../swr/usePokemon";
import LoadingComponent from "./Loading";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.4em double black;
  border-radius: 1em;
  padding: 0.8em 0.4em;
  margin: 0.4em 0;
  background-color: #dcedc1;
`;

const Title = styled.h2`
  font-size: 1.8em;
`;

const PokemonName = styled.h3`
  font-size: 1.6em;
  text-decoration-line: underline;
  text-decoration-skip-ink: auto;
`;

const Image = styled.img`
  height: 14em;
`;

const Traits = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4em;
  justify-content: space-evenly;
`;

const Trait = styled.div`
  font-size: 1.2em;
  border: 0.2em solid black;
  border-radius: 0.4em;
  padding: 0.2em;
  width: 45%;
  text-align: center;
`;

const TraitCategory = styled.p`
  font-size: 0.8em;
`;

export default function PokemonOfTheDay() {
  const [id, setId] = useState("25");
  const { pokemonData, isLoading, isError } = usePokemon(id);

  const name =
    pokemonData?.name.charAt(0).toUpperCase() + pokemonData?.name.slice(1);
  const ability =
    pokemonData?.abilities[0].ability.name.charAt(0).toUpperCase() +
    pokemonData?.abilities[0].ability.name.slice(1);
  const type =
    pokemonData?.types[0].type.name.charAt(0).toUpperCase() +
    pokemonData?.types[0].type.name.slice(1);
  const index = pokemonData?.game_indices[0].game_index;
  const version =
    pokemonData?.game_indices[0].version.name.charAt(0).toUpperCase() +
    pokemonData?.game_indices[0].version.name.slice(1);
  const spriteSrc = pokemonData?.sprites.front_default;

  function getRandomId(max) {
    const int = Math.floor(Math.random() * max);
    return int.toString();
  }

  useEffect(() => {
    setId(getRandomId(641));
  }, []);

  if (isLoading) {
    return (
      <Wrapper>
        <Title>Pokémon of the Day</Title>
        <PokemonName>Loading ...</PokemonName>
        <LoadingComponent />
        <Traits>
          <Trait>
            <TraitCategory>Ability:</TraitCategory>...
          </Trait>
          <Trait>
            <TraitCategory>Type:</TraitCategory>...
          </Trait>
          <Trait>
            <TraitCategory>Index:</TraitCategory>...
          </Trait>
          <Trait>
            <TraitCategory>Version:</TraitCategory>...
          </Trait>
        </Traits>
      </Wrapper>
    );
  }
  if (isError) {
    return (
      <Wrapper>
        <Title>Pokémon of the Day</Title>
        <PokemonName>Error fetching ...</PokemonName>
        {/* add error image here */}
        <Traits>
          <Trait>
            <TraitCategory>Ability:</TraitCategory>...
          </Trait>
          <Trait>
            <TraitCategory>Type:</TraitCategory>...
          </Trait>
          <Trait>
            <TraitCategory>Index:</TraitCategory>...
          </Trait>
          <Trait>
            <TraitCategory>Version:</TraitCategory>...
          </Trait>
        </Traits>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Title>Pokémon of the Day</Title>
      <PokemonName>{name}</PokemonName>
      <Image src={spriteSrc} alt={"Picture of " + name} />
      <Traits>
        <Trait>
          <TraitCategory>Ability:</TraitCategory> {ability}
        </Trait>
        <Trait>
          <TraitCategory>Type:</TraitCategory> {type}
        </Trait>
        <Trait>
          <TraitCategory>Index:</TraitCategory> {index}
        </Trait>
        <Trait>
          <TraitCategory>Version:</TraitCategory> {version}
        </Trait>
      </Traits>
    </Wrapper>
  );
}
