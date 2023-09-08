import styled from "styled-components";
import { useState } from "react";
import usePokemon from "../swr/usePokemon";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 16em;
`;

const Title = styled.h2`
  font-size: 1.8em;
`;

const PokemonName = styled.h3`
  font-size: 1.4em;
`;

const Image = styled.img`
  height: 14em;
`;

const Trait = styled.p`
  font-size: 1.2em;
`;

export default function PokemonOfTheDay() {
  const [id, setId] = useState("25");
  const { pokemon, isLoading, isError } = usePokemon(id);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }

  const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  const ability = pokemon.abilities[0].ability.name;
  const type = pokemon.types[0].type.name;
  const index = pokemon.game_indices[0].game_index;
  const version = pokemon.game_indices[0].version.name;
  return (
    <Wrapper>
      <Title>Pokemon of the Day</Title>
      <PokemonName>{name}</PokemonName>
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
          id +
          ".png"
        }
        alt={"Picture of " + name}
      />
      <Trait>Ability: {ability}</Trait>
      <Trait>Type: {type}</Trait>
      <Trait>Index: {index}</Trait>
      <Trait>Edition: {version}</Trait>
    </Wrapper>
  );
}
