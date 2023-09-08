import styled from "styled-components";
import usePokemon from "../swr/usePokemon";

const Wrapper = styled.div``;
const Title = styled.h2``;
const PokemonName = styled.h3``;
const Image = styled.img``;

export default function PokemonOfTheDay() {
  const { pokemon, isLoading, isError } = usePokemon("25");
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }

  const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  return (
    <Wrapper>
      <Title>Pokemon of the Day</Title>
      <PokemonName>{name}</PokemonName>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="Picture of Pikachu"
      />
    </Wrapper>
  );
}
