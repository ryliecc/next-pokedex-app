import styled from "styled-components";
import { useState, useEffect } from "react";
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

  const name = pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1);
  const ability = pokemon?.abilities[0].ability.name;
  const type = pokemon?.types[0].type.name;
  const index = pokemon?.game_indices[0].game_index;
  const version = pokemon?.game_indices[0].version.name;
  const spriteSrc = pokemon?.sprites.front_default;

  function getRandomId(max) {
    const int = Math.floor(Math.random() * max);
    return int.toString();
  }

  useEffect(() => {
    setId(getRandomId(100));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }
  return (
    <Wrapper>
      <Title>Pokemon of the Day</Title>
      <PokemonName>{name}</PokemonName>
      <Image src={spriteSrc} alt={"Picture of " + name} />
      <Trait>Ability: {ability}</Trait>
      <Trait>Type: {type}</Trait>
      <Trait>Index: {index}</Trait>
      <Trait>Version: {version}</Trait>
    </Wrapper>
  );
}
