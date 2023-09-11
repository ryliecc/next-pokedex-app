import { styled } from "styled-components";
import usePokemon from "../swr/usePokemon";

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
  z-index: 0;
`;

const Name = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 6.4em;
  right: 0;
  left: 0;
  font-size: 0.6em;
`;

const Image = styled.img`
  height: 4.2em;
  position: absolute;
  width: 100%;
  right: 0;
  left: 0;
  top: 0;
  z-index: 1;
`;

export default function DexPokemonItem({ pokedexEntry }) {
  const { pokemonData, isLoading, isError } = usePokemon(
    pokedexEntry.pokemon_species.name
  );

  const number = pokedexEntry.entry_number;
  const name =
    pokedexEntry.pokemon_species.name.charAt(0).toUpperCase() +
    pokedexEntry.pokemon_species.name.slice(1);
  const spriteSrc = pokemonData?.sprites.front_default;

  if (isLoading) {
    return (
      <Pokemon>
        <EntryNumber>{number}</EntryNumber>
        {/* shadow here */}
        <Name>{name}</Name>
      </Pokemon>
    );
  }
  if (isError) {
    return (
      <Pokemon>
        <EntryNumber>{number}</EntryNumber>
        {/* shadow here */}
        <Name>{name}</Name>
      </Pokemon>
    );
  }
  return (
    <Pokemon>
      <Image src={spriteSrc} alt={"Picture of " + name} />
      <EntryNumber>{number}</EntryNumber>
      <Name>{name}</Name>
    </Pokemon>
  );
}
